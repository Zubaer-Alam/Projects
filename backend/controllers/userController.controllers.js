const getRegister = (req, res) => {
  res.sendFile("register.html", { root: "./views/users" });
};

const postRegister = (req, res) => {
  const { username, email } = req.body;
  res.json({ username, email});
};

const getLogin = (req, res) => {
  res.sendFile("login.html", { root: "./views/users" });
};

const postLogin = (req, res) => {
  res.redirect("/dashboard");
};

const getDashboard = (req, res) => {
  res.send("<h1><b>WELCOME TO Wh!pl@$h</b></h1>");
};

module.exports = {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  getDashboard,
};
