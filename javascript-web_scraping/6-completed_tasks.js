#!/usr/bin/node
const request = require('request');
const args = process.argv.slice(2);
const apiUrl = args[0];
request(apiUrl, (err, res, body) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  const arr = JSON.parse(body);
  const usersThatFinishedTask = {};
  for (const task of arr) {
    if (task.completed === true) {
      usersThatFinishedTask[task.userId] = usersThatFinishedTask[task.userId] ? usersThatFinishedTask[task.userId] + 1 : 1;
    }
  }
  console.log(usersThatFinishedTask);
});
