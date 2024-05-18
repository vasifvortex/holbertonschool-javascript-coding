#!/usr/bin/node
const request = require('request');
const args = process.argv.slice(2);
request(args[0], (err, res, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log('code:', res.statusCode);
});
