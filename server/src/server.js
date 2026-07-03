const Internship = require("./models/Internship");
require("dotenv").config();


const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is running :D ");
});

app.post("/internships", async (req, res) => {
    try {
        const internship = await Internship.create(req.body);

        res.status(201).json({
            message: "Internship created successfully",
            data: internship
        });
    } catch (error) {
        res.status(500).json({
            message: "Error creating internship",
            error: error.message
        });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});