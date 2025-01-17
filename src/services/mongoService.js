const db = require("../config/db");
const { ObjectId } = require("mongodb");

// Fonctions utilitaires pour MongoDB
async function findOneById(collection, id) {
  try {
    const database = await db.connectMongo();
    const query = { _id: Number(id) };
    const document = await database.collection(collection).findOne(query);
    return document;
  } catch (error) {
    console.error("Failed to find document by ID", error);
  }
}

async function findAll(collection) {
  try {
    const database = await db.connectMongo();
    const document = await database.collection(collection).find().toArray();
    return document;
  } catch (error) {
    console.error("Failed to find document by ID", error);
  }
}

async function getCourseStats(collection) {
  try {
    const database = await db.connectMongo();
    const pipeline = [
      {
        $group: {
          _id: "$level",
          courses: {
            $push: { id: "$_id", title: "$title" },
          },
        },
      },
      {
        $project: {
          _id: 0,
          level: "$_id",
          courses: 1,
        },
      },
    ];

    const result = await database
      .collection(collection)
      .aggregate(pipeline)
      .toArray(); // Convert the aggregation result to an array

    return result;
  } catch (error) {
    console.error("Failed to fetch courses categorized by level", error);
  }
}

async function createCourse(collection, course) {
  try {
    const database = await db.connectMongo();
    const lastCourse = await database
      .collection("course")
      .find()
      .sort({ _id: -1 })
      .limit(1)
      .toArray();

    // If no courses exist, start from 1
    const newId = lastCourse.length > 0 ? lastCourse[0]._id + 1 : 1;

    const result = await database.collection(collection).insertOne({
      _id: Number(newId),
      title: course.title,
      description: course.description,
      category: course.category,
      level: course.level,
    });
    return result;
  } catch (error) {
    console.error("Failed to find document by ID", error);
  }
}

async function updateCourse(collection, course) {
  try {
    const database = await db.connectMongo();
    const result = await database.collection(collection).updateOne(
      { _id: Number(course.id) },
      {
        $set: {
          title: course.title,
          description: course.description,
          category: course.category,
          level: course.level,
        },
      }
    );
    return result;
  } catch (error) {
    console.error("Failed to find document by ID", error);
  }
}

// Export des services
module.exports = {
  findOneById,
  findAll,
  getCourseStats,
  createCourse,
  updateCourse,
};
