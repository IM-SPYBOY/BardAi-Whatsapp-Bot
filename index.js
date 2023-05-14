const express = require("express");
const bardart = require("bardart");
const app = express();

app.get("/", (req, res) => {

  res.send("Hello World!");

});


app.post("/webhook", (req, res) => {

  const message = req.body.message;

  const response = bardart.generate(message);

  res.send({

    message: response,

  });

});


app.listen(3000);
