const dotenv = require("dotenv");
dotenv.config();

const requiredEnvVars = ["MONGODB_URI", "MONGODB_DB_NAME", "REDIS_URI"];

// Validation des variables d'environnement
function validateEnv() {
  const missingVars = requiredEnvVars.filter(
    (varName) => !process.env[varName]
  );

  if (missingVars.length > 0) {
    console.error(
      `Missing required environment variables: ${missingVars.join(", ")}`
    );
    process.exit(1);
  }

  console.log("All required environment variables are present");
}

module.exports = {
  mongodb: {
    uri: process.env.MONGODB_URI,
    dbName: process.env.MONGODB_DB_NAME,
  },
  redis: {
    uri: process.env.REDIS_URI,
  },
  port: process.env.PORT || 3000,
};
