const express = require("express");
const router = express.Router();

// set up get route,
router.get("/", (req, res) => {
  // render the index view when a get request is made to '/'
  res.render("index", { title: "Express" });
});

module.exports = router;
