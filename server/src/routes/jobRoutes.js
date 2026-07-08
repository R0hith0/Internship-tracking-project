const express = require("express");
const router = express.Router();

const controller = require("../controllers/jobController");

router.post("/", controller.createJob);
router.get("/", controller.getJobs);
router.get("/:id", controller.getJobById);
router.put("/:id", controller.updateJob);
router.delete("/:id", controller.deleteJob);

module.exports = router;