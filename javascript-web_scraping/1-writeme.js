#!/usr/bin/node
const fs = require('fs');
const args = process.argv.slice(2);
const input = args[1];
fs.writeFile(args[0], input, 'utf8', (err) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
});
