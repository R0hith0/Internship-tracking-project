const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();

const app = express();

app.use(cors());      
app.use(express.json());


connectDB();


const jobRoutes = require("./routes/jobRoutes");
app.use("/api/jobs", jobRoutes);


app.get("/", (req, res) => {
    res.send("Server is running :D");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});