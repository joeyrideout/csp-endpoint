#!/usr/bin/env node

'use strict';

var opts = {
  "port": 3000,
  "path": "/"
};
var express = require('express');
var Ddos = require('ddos');

var endpoint = {
  parser: function(req, res, next) {
    if (req.get('Content-Type') === 'application/csp-report') {
        var data='';
        req.setEncoding('utf8');
        req.on('data', function(chunk) {
           data += chunk;
        });

        req.on('end', function() {
            req.report = data;
            next();
        });
    } else {
        next();
    }
  }
};

var ddos = new Ddos({burst:10, limit:15});
var app = express();
app.use(ddos.express);
app.use(endpoint.parser);

app.post(opts.path, function(req, res){
  try {
    var report = JSON.parse(req.report);
    console.log(JSON.stringify(report));
    res.send('ok');
  } catch(ex){
  }
  
});

console.log(JSON.stringify([{
  "listening": "http://localhost:" + opts.port + opts.path
}]));
app.listen(opts.port);
