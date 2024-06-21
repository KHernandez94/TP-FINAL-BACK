const express = require("express");
const router = express.Router();
const appController = require("../controllers/appController");

router.get("/health-check", appController);

module.exports = router;