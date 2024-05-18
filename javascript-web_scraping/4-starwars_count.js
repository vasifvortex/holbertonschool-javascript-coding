#!/usr/bin/node
const request = require('request');
const args = process.argv.slice(2);
const apiUrl = args[0];
request(apiUrl, (err, res, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  let count = 0;
  const data = JSON.parse(body).results;
  for (const id in data) {
    const charsArr = data[id].characters;
    for (const char of charsArr) {
      if (char.includes('18')) {
        count++;
      }
    }
  }
  console.log(count);
});
