const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const servicePort = process.env.EVENT_BUS_PORT;
const postsUri = process.env.POSTS_URI;
const commentUri = process.env.COMMENTS_URI;
const queryUri = process.env.QUERY_URI;
const moderationUri = process.env.MODERATION_URI;

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  axios.post(postsUri, event).catch((err) => {
    console.log(err.message);
  });

  axios.post(commentUri, event).catch((err) => {
    console.log(err.message);
  });

  axios.post(queryUri, event).catch((err) => {
    console.log(err.message);
  });

  axios.post(moderationUri, event).catch((err) => {
    console.log(err.message);
  });

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(servicePort, () => {
  console.log(`Listening on ${servicePort}`);
});
