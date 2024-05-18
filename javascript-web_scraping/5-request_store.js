#!/usr/bin/node
const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const apiUrl = args[0];
const file = args[1];
request(apiUrl, (err, res, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  fs.writeFile(file, body, 'utf-8', (error) => {
    if (error) {
      console.log(err);
      process.exit(1);
    }
  });
});
