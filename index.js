// install express with `npm install express`
const express = require("express");
const notionConfig = require("./notionConfig");
const writeData = notionConfig.writeData;

const app = express();

app.get("/", async (req, res) => {
  // const out = await writeData("Test", "https://www.youtube.com");
  res.send("hello world");
});

module.exports = app;
