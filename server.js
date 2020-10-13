const express = require("express");

const app = express();

app.use("/assets", express.static("assets"));
app.use("/images", express.static("images"));

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/index.html");
});

app.listen(3000);
