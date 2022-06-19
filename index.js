// install express with `npm install express`
const express = require("express");
const notionConfig = require("./notionConfig");
const writeData = notionConfig.writeData;

const port = 8000;
const app = express();

app.get("/", (req, res) => {
  // const out = await writeData("Test", "https://www.youtube.com");
  res.send("hello world");
});

module.exports = app;
