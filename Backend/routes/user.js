const express = require("express");
const { signup } = require("../controller/user");
const { login } = require("../controller/user");

const router = express.Router();

router.post("/signup", signup);
router.post("/login",login);


module.exports = router;
