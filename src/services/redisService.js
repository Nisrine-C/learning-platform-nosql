// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
  try {
    const cachedData = await redisClient.get(key);
    if (cachedData) {
      return JSON.parse(cachedData);
    }

    await redisClient.setEx(key, ttl, JSON.stringify(data));
    return data;
  } catch (error) {
    console.error("Error caching data with Redis:", error);
    throw error;
  }
}

module.exports = {
  cacheData,
};
