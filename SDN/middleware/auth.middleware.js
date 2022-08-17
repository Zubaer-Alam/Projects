const ensureAuth = (req, res, next) => {
   if (req.isAuthenticated()) {
      next()
   } else {
      req.flash("error", "Access Denied!")
      res.redirect("/users/login")
   }
}

module.exports = ensureAuth
