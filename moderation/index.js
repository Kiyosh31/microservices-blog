const express = require("express");
require("dotenv");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const servicePost = process.env.MODERATION_PORT;
const eventBusUri = process.env.EVENT_BUS_URI;

app.post("/events", async (req, res) => {
  const { type, data } = req.body;

  if (type === "CommentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post(eventBusUri, {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });

    res.send({});
  }
});

app.listen(servicePost, () => {
  console.log(`Listening on ${servicePost}`);
});
