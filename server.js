const express = require("express");
const path = require("path");

const app = express();

// Serve the static files from the build folder
app.use(express.static(path.join(__dirname, "build")));

// Handle React routing, return all requests to React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
