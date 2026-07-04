const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Internship = require("./models/Internship");


dotenv.config();

const app = express();

app.use(express.json());

connectDB();


app.get("/", (req, res) => {
    res.send("Server is running :D");
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


app.get("/internships", async (req, res) => {
    try {
        const internships = await Internship.find();

        res.status(200).json({
            message: "Internships fetched successfully",
            data: internships
        });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching internships",
            error: error.message
        });
    }
});


app.get("/internships/:id", async (req, res) => {
    try {
        const internship = await Internship.findById(req.params.id);

        if (!internship) {
            return res.status(404).json({
                message: "Internship not found"
            });
        }

        res.status(200).json({
            message: "Internship fetched successfully",
            data: internship
        });

    } catch (error) {
        res.status(500).json({
            message: "Error fetching internship",
            error: error.message
        });
    }
});


app.put("/internships/:id", async (req, res) => {
    try {
        const updated = await Internship.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        );

        if (!updated) {
            return res.status(404).json({ message: "Internship not found" });
        }

        res.json({
            message: "Internship updated successfully",
            data: updated
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete("/internships/:id", async (req, res) => {
    try {
        const deleted = await Internship.findByIdAndDelete(req.params.id);

        if (!deleted) {
            return res.status(404).json({ message: "Internship not found" });
        }

        res.json({ message: "Deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});