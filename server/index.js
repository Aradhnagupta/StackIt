<<<<<<< HEAD
import express from "express";
import cors from "cors";
import questionRoutes from "./routes/question.Routes.js";

const app = express();
const PORT = process.env.PORT || 5000;
=======
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
>>>>>>> frontend-aradhna

app.use(cors());
app.use(express.json());

<<<<<<< HEAD
// Root Route
app.get("/", (req, res) => {
  res.send("StackIt Server is Running 🚀");
});

// API Routes
app.use("/api/questions", questionRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

=======
app.get('/', (req, res) => {
  res.send('StackIt server is running 🚀');
});

// routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running: http://localhost:${PORT}`);
});
>>>>>>> frontend-aradhna
