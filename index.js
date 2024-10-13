const express = require("express");
const app = express();
require('dotenv').config();

app.get("/",(req,res) => {
    res.send("<h1>helloBhai</h1>");
})

app.listen(process.env.PORT,() => {
    console.log(`app started at port: ${process.env.PORT}`);
})