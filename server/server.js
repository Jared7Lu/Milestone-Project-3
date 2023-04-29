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
app.post("/create", (req, res) => {
    db.query(
        "INSERT INTO useraccounts (user_name, pass_word) VALUES( ?, ?)", [user_name, pass_word],
        (err, result) => {
            console.log(err);
        }
    )
})

// login into account
app.get("/useraccounts/:id", async (req, res) => {
    db.query(
        "SELECT * FROM useraccounts WHERE user_name = ? AND pass_word = ?", [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err});
            }

            if (result) {
                res.send(result);
            } else {
                res.send({message: "Wrong username/password"})
            }
        }
    )
})

//delete account 

//update account

app.listen(3090, () => {
    console.log("3090 server good")
})