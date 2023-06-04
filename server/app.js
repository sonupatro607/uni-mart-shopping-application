const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("this is your servere side response");
});

app.listen(8000);
