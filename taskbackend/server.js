require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.use("/api", authRoutes);

app.listen(5000, () => {
  console.log("Server Running on Port 5000");
});