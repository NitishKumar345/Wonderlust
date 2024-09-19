const express =require("express");
const { register } = require("../models/review");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController =require("../controllers/users.js");

router.get("/signup", userController.rederSignUpForm);

router.post("/signup", wrapAsync( userController.signup));

router.get("/login", userController.renderLoginForm);

router.post("/login",saveRedirectUrl, passport.authenticate("local",  { failureRedirect: '/login', failureFlash: true }
), userController.login);

router.get("/logout",  userController.logOut)

module.exports = router;