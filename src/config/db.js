const config = require("./env");
const { MongoClient } = require("mongodb");
const redis = require("redis");
let mongoClient, redisClient;
let db;

// Connect to MongoDB
async function connectMongo() {
  if (!mongoClient) {
    try {
      mongoClient = new MongoClient(config.mongodb.uri, {
        useUnifiedTopology: true,
      });
      await mongoClient.connect();
      db = mongoClient.db(config.mongodb.dbName);
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error.message);
      throw error;
    }
  }
  return db;
}

async function connectRedis() {
  try {
    redisClient = redis.createClient({
      url: config.REDIS_URI,
    });
    redisClient.on("error", (err) => console.error("Redis error:", err));
    await redisClient.connect();
    console.log("Connected to Redis");
    return redisClient;
  } catch (error) {
    console.error("Failed to connect to Redis:", error);
    process.exit(1);
  }
}

// Close the MongoDB connection
async function closeMongo() {
  if (mongoClient) {
    await mongoClient.close();
    console.log("MongoDB connection closed");
  }
}

// Export des fonctions et clients
module.exports = {
  mongoClient,
  redisClient,
  connectMongo,
  connectRedis,
  closeMongo,
};
