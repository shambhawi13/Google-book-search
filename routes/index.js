const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// API Routes for data pertaining to our DB
router.use("/api", apiRoutes);

// API Route to query the Google API
router.get("/google", (req,res) => {
  // make an api call to `https://www.googleapis.com/books/v1/volumes?q=<Book Name>` and return the relevant results.
});

// Send every other request to the React app
// Define any API routes before this runs
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


module.exports = router;
