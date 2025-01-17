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

// Export des services
module.exports = {
  findOneById,
  findAll,
  getCourseStats,
};
