const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

app.get("/api/books", (req,res) => {
  // Return all saved books as JSON
});

app.post("/api/books", (req,res) => {
  // save a new book to the database.
});
app.delete("/api/books", (req,res) => {
  // delete a book from the database by Mongo `_id`.
});

app.get("/google", (req,res) => {
  // make an api call to `https://www.googleapis.com/books/v1/volumes?q=<Book Name>` and return the relevant results.
});

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");


// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
