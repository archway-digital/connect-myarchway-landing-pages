export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const { url, scores, auditDetails } = req.body;

    if (!url || !scores) {
      return res.status(400).json({ error: 'Missing url or scores' });
    }

    const ad = auditDetails || {};

    const systemPrompt = `You are a senior digital marketing and SEO specialist who audits websites for independent insurance agencies. You give direct, specific, actionable feedback. You do not use filler phrases. You do not say 'in today's digital landscape.' You write like an advisor talking to an agency owner — plain language, no fluff.`;

    const userPrompt = `You just ran a technical audit on ${url} and got these Lighthouse scores out of 100:
- Performance (mobile): ${scores.mobile}
- SEO: ${scores.seo}
- Accessibility: ${scores.conversion}
- Best Practices: ${scores.trust}
- Speed Index score: ${ad.speedIndex !== null && ad.speedIndex !== undefined ? ad.speedIndex : 'N/A'}
- Largest Contentful Paint score: ${ad.lcp !== null && ad.lcp !== undefined ? ad.lcp : 'N/A'}
- Is on HTTPS: ${ad.isHttps !== null && ad.isHttps !== undefined ? ad.isHttps : 'unknown'}
- Time to Interactive score: ${ad.tti !== null && ad.tti !== undefined ? ad.tti : 'N/A'}
- Total Blocking Time score: ${ad.tbt !== null && ad.tbt !== undefined ? ad.tbt : 'N/A'}

Using these scores as your signal, write a website audit report for this insurance agency owner. Structure it exactly as follows — use these exact section headers:

**What's Working**
1-2 sentences only. Only mention this if something scored above 80. If nothing did, skip this section entirely.

**Technical SEO**
2-3 specific findings based on the SEO score. Cover: meta tags and page titles, crawlability signals, HTTPS status, structured data likelihood, canonical issues. Be specific to what a low/medium/high score in this range actually means technically. Give one concrete fix.

**Local SEO**
2-3 findings. Cover: whether the site likely has location-specific page content, Google Business Profile alignment signals, local keyword usage, NAP consistency likelihood based on what a site at this performance level typically looks like. Give one concrete fix.

**Page Speed & Core Web Vitals**
2-3 findings based on the performance score, LCP, Speed Index, TTI, and TBT scores. Name the actual metrics. Be specific — a 34 LCP score means something different than a 71. Give one concrete fix.

**UI & Conversion**
2-3 observations based on accessibility score and best practices score as proxies for UX quality. Cover: likely CTA placement issues, mobile tap target problems if accessibility is low, form presence likelihood, trust signal gaps. Give one concrete fix.

**Biggest Priority**
One sentence. The single most impactful thing this agency should fix first given all of the above scores.

Keep the entire response under 350 words. Do not add any intro or closing sentences outside the sections above.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1500,
        system: systemPrompt,
        messages: [{ role: 'user', content: userPrompt }]
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Anthropic API error:', errorText);
      return res.status(502).json({ error: 'Analysis service unavailable' });
    }

    const data = await response.json();
    const analysis = data.content && data.content[0] ? data.content[0].text : null;

    if (!analysis) {
      return res.status(502).json({ error: 'No analysis generated' });
    }

    return res.status(200).json({ analysis });
  } catch (err) {
    console.error('Analysis handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
