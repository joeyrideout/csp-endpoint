## Windows CSP violation report endpoint

A streamlined (~50 line) version of [csp-endpoint](https://github.com/c0nrad/csp-endpoint). This version is meant to run on any Windows machine in a robust manner by the [PM2 Node.js process manager](http://pm2.keymetrics.io/) with minimal setup time, automatic upkeep, DoS protection, and logging.

## Setup

1. Save [csp-endpoint.js](https://raw.githubusercontent.com/joeyrideout/csp-endpoint/master/csp-endpoint.js) (Right-click, Save link as...)
2. Install [Node for Windows](https://nodejs.org/en/download/)
3. Open PowerShell and install packages:
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

## Future

Automatic log rotation can be enabled as soon as [this issue for PM2 on Windows](https://github.com/Unitech/pm2/issues/3456) is released; current fix is "pending release".

### License
ISC
