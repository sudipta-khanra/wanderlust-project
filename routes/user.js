const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controllers/users.js");



router.route("/signup")
.get( userController.renderSignupForm)
.post( wrapAsync (userController.signup));


//the photo naming 1234 login
router.route("/login")
.get( userController.renderLoginForm)
.post(saveRedirectUrl, passport.authenticate("local", {failureRedirect: "/login", failureFlash: true}), 
userController.login
);

router.get("/logout", userController.logout);



// router.post('/logout', function(req, res, next) {
//     req.logout(function(err) {
//       if (err) { 
//         return next(err); }
//       res.redirect('/');
//     });
//   });

module.exports = router;