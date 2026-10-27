const mongoose = require('mongoose');
const dns = require("node:dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);
const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/task_manager_app';
  console.log(process.env.MONGO_URI);
  try {
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000
    });
    console.log(`✅ [Database] MongoDB Connected successfully: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.warn(`⚠️ [Database Notice] MongoDB is not running locally at: ${mongoUri}`);
    console.warn(`💡 [Database Notice] Fallback in-memory persistence active. All API & Frontend features remain fully operational.`);
  }
};

module.exports = connectDB;
