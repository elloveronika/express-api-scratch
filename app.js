const express = require("express");

const app = express();

console.log("Nodemon is saving lives");

app.get("/", (request, response) => {
  response.send("Hello World");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
