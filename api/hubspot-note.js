// To create the HUBSPOT_PRIVATE_APP_TOKEN:
// 1. Go to HubSpot → Settings → Integrations → Private Apps
// 2. Create new private app
// 3. Under Scopes → CRM, check:
//    - Contacts: Read
//    - Notes: Read, Write
//    - Tasks: Read, Write
// 4. Generate token and paste it into .env as HUBSPOT_PRIVATE_APP_TOKEN

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { email, url, scores, narrative } = req.body;
  const token = process.env.HUBSPOT_PRIVATE_APP_TOKEN;

  if (!token) {
    return res.status(500).json({ error: 'HubSpot token not configured' });
  }

  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };

  try {
    // Step 1 — find contact by email
    const searchRes = await fetch('https://api.hubspot.com/crm/v3/objects/contacts/search', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        filterGroups: [{ filters: [{ propertyName: 'email', operator: 'EQ', value: email }] }],
        properties: ['hs_object_id', 'email']
      })
    });

    const searchData = await searchRes.json();
    const contactId = searchData.results?.[0]?.id;

    if (!contactId) return res.status(404).json({ error: 'Contact not found' });

    // Step 2 — create note on contact record
    const noteBody = [
      'WEBSITE GRADER RESULTS',
      `Submitted: ${new Date().toLocaleString()}`,
      `URL Graded: ${url}`,
      '',
      'SCORES',
      `Overall: ${scores.overall}/100`,
      `Mobile Experience: ${scores.mobile}/100`,
      `Page Speed: ${scores.pageSpeed}/100`,
      `Local SEO: ${scores.seo}/100`,
      `Conversion Design: ${scores.conversion}/100`,
      `Trust & Authority: ${scores.trust}/100`,
      '',
      'PAGESPEED NARRATIVE',
      narrative || 'Not available'
    ].join('\n');

    await fetch('https://api.hubspot.com/crm/v3/objects/notes', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        properties: {
          hs_note_body: noteBody,
          hs_timestamp: String(Date.now()),
          hubspot_owner_id: '54043254'
        },
        associations: [{
          to: { id: contactId },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 202 }]
        }]
      })
    });

    // Step 3 — create task due in 1 hour
    await fetch('https://api.hubspot.com/crm/v3/objects/tasks', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        properties: {
          hs_task_subject: `Website Grader submitted — ${url} scored ${scores.overall}/100`,
          hs_task_body: 'Review grader results on contact record and follow up within 1 hour.',
          hs_task_status: 'NOT_STARTED',
          hs_task_priority: 'HIGH',
          hs_timestamp: String(Date.now() + 3600000),
          hubspot_owner_id: '54043254'
        },
        associations: [{
          to: { id: contactId },
          types: [{ associationCategory: 'HUBSPOT_DEFINED', associationTypeId: 204 }]
        }]
      })
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('HubSpot note handler error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
