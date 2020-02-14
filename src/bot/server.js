"use strict";

const { WebClient } = require("@slack/web-api");
const CronJob = require("cron").CronJob;
require("dotenv").config();

const CLIENT = new WebClient(process.env.SLACK_TOKEN);

let temp = null;
let timeReceived = null;

const net = require("net");

var server = net.createServer(function(sock) {
  sock.setEncoding("utf8");

  sock.on("data", function(data) {
    if (data === process.env.TOKEN) {
      timeReceived = Date.now();
    }
    sock.end();
  });
  sock.on("error", err => {
    console.log(err);
  });
});

server.listen(5674, "0.0.0.0");

const sendMsgToSlack = power => {
  let text;
  if (power) {
    text = "AC Power Is Back";
  } else {
    text = "AC Power Cut off";
  }
  CLIENT.chat.postMessage({
    channel: process.env.SLACK_CHANNEL,
    text: text,
    username: "AC Monitor",
    icon_emoji: ":fixparrot:"
  });
};

const checkACOff = new CronJob(
  "*/5 * * * * *",
  function() {
    if (timeReceived === null) {
      return;
    }

    if (Date.now() - timeReceived > 5000) {
      sendMsgToSlack(false);
      temp = timeReceived;
      checkACOff.stop();
      checkACOn.start();
    }
  },
  null,
  true,
  "Asia/Bangkok"
);

const checkACOn = new CronJob(
  "*/5 * * * * *",
  function() {
    if (temp !== timeReceived) {
      sendMsgToSlack(true);
      checkACOn.stop();
      checkACOff.start();
    }
  },
  null,
  true,
  "Asia/Bangkok"
);

checkACOff.start();

console.log("Started");
