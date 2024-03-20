const express = require("express");
const { signup, login, addList, verifyOtp, resendOtp, forgotPassword } = require("../controller/user.controller");
const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post('/forgotpassword', forgotPassword);
router.post("/savelist/:id", addList);
router.post('/verifyotp', verifyOtp);
router.post("/resendotp", resendOtp)

module.exports = router;
