const express = require("express");
// const cros = require("cros");
const app = express();

// app.use(cros());

const apiData = require("./data.json");

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(apiData);
})

app.listen(port , () => {
    console.log("I am live again");
})
