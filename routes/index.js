const express = require("express");
const router = express.Router();

// set up get route,
router.get("/", (req, res) => {
  console.log(req.oidc.isAuthenticated());
  // render the index view when a get request is made to '/'
  res.render("index", {
    title: "Express",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
});

router.get("/secured", (req, res) => {
  res.render("secured", {
    title: "Secure page",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
  });
});

module.exports = router;
