const express = require('express');
const mysql = require('mysql');
var cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "TokaFitness"
});

// make test connection
db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("MySQL connected");
    }
});

//make test post
app.get("/test", (req, res) => {
    return res.send("test");
});


app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Values inserted");
        }
    }
});

app.post("/login", (req, res) => {
    const email = req.body.email;
    const password = req.body.password; 
    // query to check if email and password match
    console.log(email, password)
    db.query(
        "SELECT * FROM users WHERE email = ? AND password = ?",
        [email, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
                console.log(err);
            }
            if (result.length > 0) {
                res.send(result);
                console.log(result);
            } else {
                res.send({ message: "Wrong email/password combination!" });
                console.log("Wrong email/password combination!")
            }
        }

    );
});


app.listen(3001, () => {
    console.log("running on port 3001");
});