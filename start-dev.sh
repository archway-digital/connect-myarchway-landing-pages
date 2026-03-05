#!/bin/bash
export FNM_DIR="$HOME/.local/share/fnm"
eval "$("$FNM_DIR/fnm" env)"
cd /tmp/archway-astro
npx astro dev --port 4321
