const express = require("express");
const {
  addTask,
  updateTask,
  removeTask,
  countTask,
  homeRoute,
  viewAllTasks,
} = require("../Controllers/taskController");

const taskRouter = express.Router();

taskRouter.post("/addData", addTask);
taskRouter.get("/", homeRoute);
taskRouter.get("/viewAllTasks", viewAllTasks);
taskRouter.put("/updateData/:id", updateTask);
taskRouter.delete("/delete/:id", removeTask); 
taskRouter.get("/count", countTask);

module.exports = taskRouter;
