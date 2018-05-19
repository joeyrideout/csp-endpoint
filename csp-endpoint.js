#!/usr/bin/env node

'use strict';

var express = require('express');

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
  },

  classify: function() {
    //return inline, evil, mixed-content, blocked-host etc
  },

  sanitize: function() {
    // query strings, paths, etc
  }
};

// var endpoint = require('../index');
var app = express();
app.use(endpoint.parser);

var opts = {
  "port": 3000,
  "path": "/"
}

app.post(opts.path, function(req, res){
  try {
      var report = JSON.parse(req.report);
      console.log(JSON.stringify(report));
      res.send('Thanks!');
    } catch(ex){
    }
  
});

console.log('Listening on http://host:' + opts.port + opts.path);
app.listen(opts.port);
