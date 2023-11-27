const express = require("express");
const { login, register, logout } = require("../controller/auth");

const router = express.Router();

router.post("/", login);
router.post("/register", register);
router.post("/logout", logout);

module.exports = router;
