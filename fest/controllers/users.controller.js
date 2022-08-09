const User = require("../models/User.model");
const bcrypt = require("bcryptjs");

const getLogin = (req, res) => {
  res.render("users/login.ejs");
};

const postLogin = (req, res) => {
  const { email, password } = req.body;
};

const getRegister = (req, res) => {
  res.render("users/register.ejs", { errors: req.flash("errors") });
};

const postRegister = (req, res) => {
  const { name, email, password, confirm_password } = req.body;

  //Data Validation
  const errors = [];
  if (!name || !email || !password || !confirm_password) {
    errors.push("All fields are required!");
  }
  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }
  if (password !== confirm_password) {
    errors.push("Passwords do not match");
  }

  if (errors.length > 0) {
    req.flash("errors", errors);
    res.redirect("/users/register");
  } else {
    //Create user
    User.findOne({ email: email }).then((user) => {
      if (user) {
        errors.push("User already exists with this E-Mail");
        req.flash("errors", errors);
        res.redirect("/users/register");
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) {
            errors.push(err);
            req.flash("errors", errors);
            res.redirect("/users/register");
          } else {
            bcrypt.hash(password, salt, (err, hash) => {
              if (err) {
                errors.push(err);
                req.flash("errors", errors);
                res.redirect("/users/register");
              } else {
                const newUser = new User({
                  name,
                  email,
                  password: hash,
                });
                newUser
                  .save()
                  .then(() => {
                    res.redirect("/users/login");
                  })
                  .catch(() => {
                    errors.push("Saving User to the Database failed");
                    req.flash("errors", errors);
                    res.redirect("/users/redirect");
                  });
              }
            });
          }
        });
      }
    });
  }
};

module.exports = { getLogin, postLogin, getRegister, postRegister };
