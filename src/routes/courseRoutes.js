const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Routes pour les cours
router.get("/", courseController.getAllCourses);
router.get("/stats", courseController.getCourseStats);
router.get("/:id", courseController.getCourse);

router.post("/", courseController.createCourse);
router.put("/:id", courseController.updateCourse);
module.exports = router;
