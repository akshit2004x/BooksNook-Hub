const express = require("express");
const { getbook } = require("../controller/book");

const router = express.Router();

router.get("/", getbook);

module.exports = router;
