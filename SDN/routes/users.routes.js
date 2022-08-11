const express = require("express")
const router = express.Router()
const ensureAuth = require("./../middleware/auth.middleware")
const {
   getLogin,
   postLogin,
   getRegister,
   postRegister,
} = require("../controllers/users.controller")

router.get("/login", getLogin)
router.post("/login", postLogin)

router.get("/register", getRegister)
router.post("/register", postRegister)

router.get("/logout", (req, res) => {
   req.logOut()
   res.redirect("/")
})

module.exports = router
