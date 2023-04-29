const express = require("express")
const app = express();
const {Sequelize} = require('sequelize');
const path = require('path');
const cors = require('cors');
const pool = require("./account.js")

//middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes

//create account 
// app.post(/)
// //find account
// app.get()

app.listen(3090, () => {
    console.log("3090 server good")
})