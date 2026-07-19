const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// Import food routes
const foodRoutes = require("./routes/foodRoutes");

// API routes
app.use("/api/foods", foodRoutes);

// Serve frontend
app.use(express.static(path.join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

// For all other frontend routes (Express 5 compatible)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});