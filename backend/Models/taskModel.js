const { Schema, model } = require("mongoose");

const taskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  type: { type: String, enum: ["add", "update"], default: "add" },
  timestamp: { type: Date, default: Date.now },
});
const taskModel = model("Task", taskSchema);



const countSchema = new Schema({
  addCount: { type: Number, default: 0 },
  updateCount: { type: Number, default: 0 },
});

const countModel = model("Count", countSchema);

module.exports = { taskModel, countModel };
