const { Schema, model } = require("mongoose");

const countSchema = new Schema({
  addCount: { type: Number, default: 0 },
  updateCount: { type: Number, default: 0 },
});

const countModel = model("Count", countSchema);

module.exports = countModel;
