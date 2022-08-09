const isLoggedIn = (req, res, next) => {
  const username  = req.body;

  req.method == "POST"
    ? username == "zubaer"
      ? next()
      : res.redirect("/login")
    : next();
};

module.exports = isLoggedIn;
