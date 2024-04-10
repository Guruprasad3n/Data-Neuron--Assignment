const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const response = await mongoose.connect(
      `mongodb://localhost:27017/dataneuron`
    );
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
