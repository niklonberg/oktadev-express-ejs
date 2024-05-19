const express = require("express");
const router = express.Router();
const { requiresAuth } = require("express-openid-connect");
const axios = require("axios");

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

// in order to ensure this page cannot be rendered unless we are logged in,
// we can provide an extra parameter to this endpoint handler to require that authentication
// see line 3
router.get("/secured", requiresAuth(), async (req, res) => {
  let data = {};

  try {
    const apiResponse = await axios.get("http://localhost:5000/public");
    data = apiResponse.data;
  } catch (e) {} // skip error handling, could be added later

  res.render("secured", {
    title: "Secure page",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
    data,
  });
});

module.exports = router;
