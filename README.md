# csp-endpoint

Windows CSP violation report endpoint

This is a streamlined version of [csp-endpoint](https://github.com/c0nrad/csp-endpoint) meant to be run in a robust manner by the PM2 Node.js process manager.

## Usage


## Installation

1. Save [csp-endpoint.js](https://raw.githubusercontent.com/joeyrideout/csp-endpoint/master/bin/csp-endpoint.js)
2. Install [Node for Windows](https://nodejs.org/en/download/)
3. Open PowerShell, and install pm2 and express:
```
npm install -g pm2 express
```
4. Have the endpoint recover after a reboot:
```
npm install pm2-windows-startup -g
pm2-startup install
```
5. Start a cluster of csp-endpoint processes (omit "-i 0" for a single process) and save them for startup on reboot:
```
pm2 start csp-endpoint.js -i 0
pm2 save
```
