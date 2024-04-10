const countModel = require("../Models/countSchema");
const taskModel = require("../Models/taskModel");

//  /
const homeRoute = async (req, res) => {
  try {
    return res.status(200).send({ message: "Welcome to Data Neuron" });
  } catch (error) {
    res.status(500).send({ message: "Error in Backend" });
  }
};

// /addData
const addTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const newTask = new taskModel({ title, description, type: "add" });
    await newTask.save();
    await countModel.findOneAndUpdate(
      {},
      { $inc: { addCount: 1 } },
      { upsert: true }
    );
    return res.status(201).send({
      success: true,
      message: "Data added successfully",
      newTask,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Failed to add data",
      error: error.message,
    });
  }
};

// /updateData/:id
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const updatedTask = await taskModel.findByIdAndUpdate(
      id,
      { title, description, type: "update" },
      { new: true }
    );

    if (!updatedTask) {
      return res
        .status(404)
        .send({ success: false, message: "Task not found" });
    }

    await countModel.findOneAndUpdate(
      {},
      { $inc: { updateCount: 1 } },
      { upsert: true }
    );

    return res
      .status(200)
      .send({ success: true, message: "Data updated successfully" });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Failed to update data",
      error: error.message,
    });
  }
};

//  /viewAllTasks
const viewAllTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    return res
      .status(200)
      .send({ message: "Successfully Fetched Tasks", success: true, tasks });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Failed to fetch tasks",
      error: error.message,
    });
  }
};

// /delete/:id
const removeTask = async (req, res) => {
  try {
    const _id = req.params.id;
    console.log(_id);
    const removedTask = await taskModel.findByIdAndDelete({ _id });
    if (!removedTask) {
      return res
        .status(404)
        .send({ success: false, message: "Task not found" });
    }
    return res
      .status(200)
      .send({ success: true, message: "Task removed successfully" });
  } catch (error) {
    return res.status(500).status({
      success: false,
      message: "Failed to remove task",
      error: error.message,
    });
  }
};
// /count
const countTask = async (req, res) => {
  try {
    const addUpdateCount = await countModel.findOne({});
    if (!addUpdateCount) {
      return res.status(404).send({
        success: false,
        message: "Add Update Count not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Add Update Count fetched successfully",
      addUpdateCount,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Failed to fetch Add Update Count",
      error: error.message,
    });
  }
};

module.exports = {
  homeRoute,
  addTask,
  updateTask,
  removeTask,
  countTask,
  viewAllTasks,
};
