const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const isLoggedIn = require("../middleware/authUsers.middleware");
const {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  getDashboard,
} = require("../controllers/userController.controllers");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.route("/register").get(getRegister).post(postRegister);

router.route("/login").all(isLoggedIn).get(getLogin).post(postLogin);

router.get("/dashboard", getDashboard);


module.exports = router;
