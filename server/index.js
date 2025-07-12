import express from "express";
import cors from "cors";
import questionRoutes from "./routes/question.Routes.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

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

