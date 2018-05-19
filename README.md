# csp-endpoint

Windows CSP violation report endpoint

This is a streamlined version of [csp-endpoint](https://github.com/c0nrad/csp-endpoint) meant to be run in a robust manner by the PM2 Node.js process manager.

## Setup

1. Save [csp-endpoint.js](https://raw.githubusercontent.com/joeyrideout/csp-endpoint/master/bin/csp-endpoint.js)
2. Install [Node for Windows](https://nodejs.org/en/download/)
3. Open PowerShell. Install pm2, express, and pm2-windows-startup:
```
npm install -g pm2 express pm2-windows-startup
pm2-startup install
```
4. Start a cluster of csp-endpoint processes (omit `-i 0` for a single process) and save them for startup on reboot:
```
pm2 start csp-endpoint.js -i 0
pm2 save
```

## Usage

Logs are available in `[HOME]/.pm2/logs/`
