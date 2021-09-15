const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 4000;

app.use("/", express.static("../client/dist"));

app.listen(port, () => {
  console.log("app is listening on port ", port);
});
