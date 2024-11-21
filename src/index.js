//entry pt for react app
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"; // Import the main App component
import "./App.css"; // Optional styling

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);