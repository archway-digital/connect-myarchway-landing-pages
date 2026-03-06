#!/bin/bash
export PATH="/Users/keviyoung/.local/node/bin:$PATH"
cd "$(dirname "$0")/.."
npx astro dev
