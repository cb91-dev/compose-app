const mongoose = require('mongoose');
const { MONGO_URL } = require("./config");

const connectToDatabase = async () => {
  let connection;

  try {
    connection = await mongoose.connect(MONGO_URL)
    console.log("Connected to MongoDB successfully!");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }

  return connection;
};

module.exports = connectToDatabase;
