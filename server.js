const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, "build")));

// Backend API example
app.get("/api/data", (req, res) => {
    res.json({ message: "Hello from the backend!" });
});

// Serve React frontend for all unknown routes
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Use the PORT environment variable if set (Heroku sets this)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
;
