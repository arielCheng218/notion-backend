// install express with `npm install express`
const express = require("express");
const notionConfig = require("./notionConfig");
const writeData = notionConfig.writeData;

const app = express();

app.get("/", async (req, res) => {
  res.send("hello world!");
});

app.post("/add-to-nerd-time-list", async (req, res) => {
  const data = await writeData("Test", "https://www.youtube.com");
  return res.send(data);
});

app.listen(process.env.PORT || 5000, console.log(`Listening on port ${port}`));
