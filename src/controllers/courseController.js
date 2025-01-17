const { ObjectId } = require("mongodb");
const db = require("../config/db");
const mongoService = require("../services/mongoService");
const redisService = require("../services/redisService");

async function createCourse(request, response) {
  const { title, description, category, level } = request.body;

  if (!title || !description || !category || !level) {
    return response.status(400).json({ message: "All fields are required." });
  }

  const course = {
    title,
    description,
    category,
    level,
  };

  try {
    const result = await mongoService.createCourse("course", course);
    response
      .status(201)
      .json({ message: "Course created successfully", result: result });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failed to create course", error: error.message });
  }
}

async function updateCourse(request, response) {
  const { id } = request.params;
  const { title, description, category, level } = request.body;

  // Ensure the required fields are provided
  if (!title || !description || !category || !level) {
    return response.status(400).json({
      message: "All fields (title, description, category, level) are required.",
    });
  }

  const course = {
    id,
    title,
    description,
    category,
    level,
  };

  try {
    const result = await mongoService.updateCourse("course", course);
    response
      .status(201)
      .json({ message: "Course updated successfully", result: result });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failed to updatecourse", error: error.message });
  }
}

async function getCourse(request, response) {
  const { id } = request.params;
  try {
    const course = await mongoService.findOneById("course", id);
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
