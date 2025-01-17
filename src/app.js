const express = require("express");
const config = require("./config/env");
const db = require("./config/db");
const courseRoutes = require("./routes/courseRoutes");
//const studentRoutes = require("./routes/studentRoutes");

// Création de l'application Express
const app = express();

// Fonction pour démarrer le serveur
async function startServer() {
  try {
    /*
    // 1. Initialize the database connections
    await db.connectMongo(); // Connect to MongoDB
    //await db.connectRedis(); // Connect to Redis if needed
    */

    app.use(express.json()); // Middleware pour parser le JSON
    app.use(express.urlencoded({ extended: true })); // Middleware pour parser les données d'un formulaire

    // 3. Monter les routes
    app.use("/api/course", courseRoutes); // Routes pour les cours

    // 4. Démarrer le serveur
    const port = config.port || 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1); // Arrêter le processus si la connexion échoue
  }
}

// Gestion propre de l'arrêt
process.on("SIGTERM", async () => {
  console.log("SIGTERM received. Closing connections...");
  try {
    await db.mongoClient.close();
    console.log("MongoDB connection closed");
    process.exit(0);
  } catch (error) {
    console.error("Error while closing connections:", error);
    process.exit(1); // Si la fermeture échoue, arrêter avec une erreur
  }
});

startServer();
