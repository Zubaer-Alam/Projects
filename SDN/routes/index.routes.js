const express = require("express")
const ensureAuth = require("./../middleware/auth.middleware")
const router = express.Router()

router.get("/", (req, res) => {
   res.render("welcome.ejs")
})

router.get("/dashboard", ensureAuth, function (req, res) {
   res.render("dashboard.ejs")
})

module.exports = router
