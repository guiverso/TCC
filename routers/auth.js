const express = require("express");
const path = require("path");

const auth = express.Router();

auth.get('/',(req,res)=>{
    let index = path.join(__dirname,'../public/views/login.html');
    res.status(400).sendFile(index);
});

module.exports = auth;