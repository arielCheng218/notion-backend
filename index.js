// install express with `npm install express`
const express = require("express");
const notionConfig = require("./notionConfig");
const readData = notionConfig.readData;
const writeData = notionConfig.writeData;

const app = express();

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", async (req, res) => {
  data = await readData();
  res.send(data);
});

app.post("/on-submit", async (req, res) => {
  console.log(req.body.name);
  console.log(typeof req.body.name);
  console.log(req.body.source);
  console.log(typeof req.body.source);
  const data = await writeData({
    name: "Test",
    source: "https://www.youtube.com/",
  });
  return res.send(data);
});

app.listen(
  process.env.PORT || 5000,
  "0.0.0.0",
  console.log(`Listening on port ${process.env.PORT}`)
);
