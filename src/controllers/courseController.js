const { ObjectId } = require("mongodb");
const db = require("../config/db");
const mongoService = require("../services/mongoService");
const redisService = require("../services/redisService");

async function createCourse(request, response) {
  try {
    const { title, description, category, level } = req.body;
    const course = await mongoService.createCourse({
      title,
      description,
      category,
      level,
    });

    res.status(201).json({ message: "Course created successfully", course });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create course", error: error.message });
  }
}

async function updateCourse(request, response) {}

async function getCourse(request, response) {
  const { id } = request.params;
  try {
    const course = await mongoService.findOneById("course", id); // Use the service
    if (!course) {
      return response.status(404).json({ message: "Course not found" });
    }
    response.status(200).json(course);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failed to fetch course", error: error.message });
  }
}

async function getAllCourses(request, response) {
  try {
    const courses = await mongoService.findAll("course"); // Use the service
    if (!courses) {
      return response.status(404).json({ message: "No Courses Available" });
    }
    response.status(200).json(courses);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failed to fetch courses", error: error.message });
  }
}

async function getCourseStats(request, response) {
  try {
    const stats = await mongoService.getCourseStats("course");
    response.status(200).json(stats);
  } catch (error) {
    response
      .status(500)
      .json({ message: "Error fetching course stats", error: error.message });
  }
}

// Export des contrôleurs
module.exports = {
  createCourse,
  updateCourse,
  getAllCourses,
  getCourse,
  getCourseStats,
};
