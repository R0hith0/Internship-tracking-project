require("dotenv").config();


const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running :D ");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});