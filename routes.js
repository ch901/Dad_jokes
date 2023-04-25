const express = require("express");
const controller = require("./controllers");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/dad-jokes", controller.dadJoke);

module.exports = router;
