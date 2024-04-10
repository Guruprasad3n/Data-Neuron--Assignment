const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./Config/db");
const taskRouter = require("./Routes/taskRoute");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// app.get("/", async (req, res) => {
//   res.status(200).send("Hello Data Neuron");
// });
app.use("/", taskRouter)

const Port = process.env.PORT || 5000;

app.listen(Port, async (req, res) => {
  console.log(`Server Started at http://localhost:${Port}`);
});
