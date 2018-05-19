## Windows CSP violation report endpoint

This is a streamlined version of [csp-endpoint](https://github.com/c0nrad/csp-endpoint) meant to be run in a robust manner by the [PM2 Node.js process manager](http://pm2.keymetrics.io/) with minimal setup time, automatic upkeep, DoS protection, and logging on any Windows machine.

## Setup

1. Save [csp-endpoint.js](https://raw.githubusercontent.com/joeyrideout/csp-endpoint/master/csp-endpoint.js) (Right-click, Save link as...)
2. Install [Node for Windows](https://nodejs.org/en/download/)
3. Open PowerShell. Install pm2, express, and pm2-windows-startup:
```
npm install -g express ddos pm2 pm2-windows-startup
pm2-startup install
```
4. Start a cluster of csp-endpoint processes (change `max` to `1` for a single process, etc.) and save them for startup on reboot:
```
pm2 start csp-endpoint.js -i max
pm2 save
```
Note: Include `C:\PATH\TO\SCRIPT\csp-endpoint.js` if not in current directory.

## Integration

Logs are available in `C:\Users\[USER]\.pm2\logs\`


### License
ISC
