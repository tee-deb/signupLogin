const express = require("express");
const { signup, login, addList, verifyOtp } = require("../controller/user.controller");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/savelist/:id", addList);
router.post('/verifyotp', verifyOtp)

module.exports = router;
