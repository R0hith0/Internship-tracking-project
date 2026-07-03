const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://RohithRaj_db_user:8oUyTqJhMn7G2JhB@cluster0.exbsflr.mongodb.net/internshipDB?appName=Cluster0");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log("Database Connection Failed:", error.message);
    }
};

module.exports = connectDB;