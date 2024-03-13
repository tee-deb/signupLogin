const express = require("express");
dotenv = require("dotenv");
const mongoose = require("mongoose");
const morgan = require("morgan");
const { connectDB } = require("./config/db");
const userRouter = require('./routes/user.routes')

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse JSON in the request body
app.use(express.json());
app.use(morgan("dev"));


app.get("/", (req, res) => {
  res.send("Welcome To Our TODO LIST APP");
});

app.use('/api/v1/user', userRouter)

// @404 page
app.get("*", (req, res) => {
    res.status(404).json("page not found");
  });

  app.listen(port, async () => {
    try {
      await connectDB(process.env.CONNECTION_STRING);
      console.log("Database connection established");
      console.log(`Server is listening on http://localhost:${port}`);
    } catch (error) {
      console.log("Error connecting to MongoDB: " + error.message);
    }
  });
