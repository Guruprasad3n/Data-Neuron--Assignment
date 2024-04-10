const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const response = await mongoose.connect(
      process.env.MONGO_URL
    );
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
