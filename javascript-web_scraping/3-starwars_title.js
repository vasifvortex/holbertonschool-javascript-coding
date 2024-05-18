#!/usr/bin/node
const request = require('request');
const args = process.argv.slice(2);
const endPoint = 'https://swapi-api.hbtn.io/api/films/' + args[0];
request(endPoint, (err, res, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(JSON.parse(body).title);
});
