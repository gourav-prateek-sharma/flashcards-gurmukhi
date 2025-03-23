import React from "react";
import ReactDOM from "react-dom/client"; // Make sure you're importing from react-dom/client for React 18+
import FlashcardApp from "./App"; // This should match your component filename

// For React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FlashcardApp />
  </React.StrictMode>
);
