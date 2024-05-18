#!/usr/bin/node
const fs = require('fs');
const args = process.argv.slice(2);
fs.readFile(args[0], 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(data);
});
