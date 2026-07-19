const express = require("express");

const app = express();

app.use(express.json());

//import food routes
const foodRoutes=require("./routes/foodRoutes");

//use food routes
app.use("/api/foods",foodRoutes);

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to YummyGo Backend!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});