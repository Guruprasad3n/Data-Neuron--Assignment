const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ["add", "update"], default: "add" },
  timestamp: { type: Date, default: Date.now },
});
const taskModel = model("Task", taskSchema);

module.exports = taskModel;


