## Windows CSP violation report endpoint

A streamlined (~50 line) version of [csp-endpoint](https://github.com/c0nrad/csp-endpoint). This version is meant to be run in a cross-platform and robust manner by the [PM2 Node.js process manager](http://pm2.keymetrics.io/) and features minimal setup time, Windows support, scaleability, automatic upkeep, DoS protection, and logging.

## Setup (Linux)

1. Save [csp-endpoint.js](https://raw.githubusercontent.com/joeyrideout/csp-endpoint/master/csp-endpoint.js) (Right-click, Save link as...)
2. [Install Node](https://nodejs.org/en/download/)
3. Open Terminal and install packages:
```
npm install -g express ddos pm2
```
4. Generate startup installation command, then run it as directed:
```
pm2 startup
```
5. Start a cluster of csp-endpoint processes (change `max` to `1` for a single process, etc.) and save them for startup on reboot:
```
pm2 start /PATH/TO/csp-endpoint.js -i max
pm2 save
```

## Setup (Windows)

1. Save [csp-endpoint.js](https://raw.githubusercontent.com/joeyrideout/csp-endpoint/master/csp-endpoint.js) (Right-click, Save link as...)
2. [Install Node](https://nodejs.org/en/download/)
3. Open PowerShell and install packages:
```
npm install -g express ddos pm2 pm2-windows-startup
pm2-startup install
```
4. Start a cluster of csp-endpoint processes (change `max` to `1` for a single process, etc.) and save them for startup on reboot:
```
pm2 start C:\PATH\TO\csp-endpoint.js -i max
pm2 save
```

## Integration

Logs are available in `[HOMEDIR]\.pm2\logs\`

## Known Issues

Automatic log rotation is supported for Linux but can't be enabled on Windows until [this issue](https://github.com/Unitech/pm2/issues/3456) is released; current fix is "pending release".

### License
ISC
