const Job = require("../models/Job");
const jobSchema = require("../validators/jobValidator");

// CREATE
exports.createJob = async (req, res) => {
    try {
        // Validate request body
        const result = jobSchema.safeParse(req.body);

        if (!result.success) {
            return res.status(400).json({
                message: "Validation failed",
                errors: result.error.issues
            });
        }

        // Convert workMode to uppercase if provided
        if (req.body.workMode) {
            req.body.workMode = req.body.workMode.toUpperCase();
        }

        const data = await Job.create(req.body);

        res.status(201).json({
            message: "Job created successfully",
            data
        });

    } catch (err) {
        res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

// Get all jobs with optional features included 
exports.getJobs = async (req, res) => {
    try {
        const filter = {};

        // Filters
        if (req.query.companyName) {
            filter.companyName = req.query.companyName;
        }

        if (req.query.role) {
            filter.role = req.query.role;
        }

        if (req.query.workMode) {
            filter.workMode = req.query.workMode.toUpperCase();
        }

        // Search
        if (req.query.search) {
            filter.$or = [
                {
                    companyName: {
                        $regex: req.query.search,
                        $options: "i"
                    }
                },
                {
                    role: {
                        $regex: req.query.search,
                        $options: "i"
                    }
                },
                {
                    qualification: {
                        $regex: req.query.search,
                        $options: "i"
                    }
                }
            ];
        }

        // Page making
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const skip = (page - 1) * limit;

        // Sorting (newest first default, oldest optional)
        let sortOption = { createdAt: -1 };

        if (req.query.order === "oldest") {
            sortOption = { createdAt: 1 };
        }

        
        const totalJobs = await Job.countDocuments(filter);

        const totalPages = Math.max(1, Math.ceil(totalJobs / limit));
        const hasNextPage = page < totalPages;
        const hasPreviousPage = page > 1;

   
        const data = await Job.find(filter)
            .sort(sortOption)
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            message: "Jobs fetched successfully",
            page,
            limit,
            totalJobs,
            totalPages,
            hasNextPage,
            hasPreviousPage,
            data
        });

    } catch (err) {
        res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

// searching by the id 
exports.getJobById = async (req, res) => {
    try {
        const data = await Job.findById(req.params.id);

        if (!data) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json({
            message: "Job fetched successfully",
            data
        });

    } catch (err) {
        res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

// updating info
exports.updateJob = async (req, res) => {
    try {
        if (req.body.workMode) {
            req.body.workMode = req.body.workMode.toUpperCase();
        }

        const data = await Job.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: "after" }
        );

        if (!data) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json({
            message: "Job updated successfully",
            data
        });

    } catch (err) {
        res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};

// deleting
exports.deleteJob = async (req, res) => {
    try {
        const data = await Job.findByIdAndDelete(req.params.id);

        if (!data) {
            return res.status(404).json({
                message: "Job not found"
            });
        }

        res.status(200).json({
            message: "Job deleted successfully"
        });

    } catch (err) {
        res.status(500).json({
            message: "Server error",
            error: err.message
        });
    }
};