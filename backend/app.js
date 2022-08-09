const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes.routes");
const morgan = require("morgan");
const logger = require("./middleware/app.middleware");

//App level Middleware
app.use(userRoutes);
//custom middleware
//app.use(logger);

//Built-in Middleware
//shows the static elements i.e CSS and Images
app.use(express.static("public"));
//public is the folder where the static stuff are

//3rd-Party Middleware
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.sendFile("home.html", { root: "./views" });
});
app.get("/about", (req, res) => {
  res.json({ appName: "Backend", Version: "1.0.0" });
});
app.get("/contact", (req, res) => {
  res.json({ Name: "Zubaer", ID: 170042051 });
});
app.use((req, res) => {
  res.send("Error 404!");
});

module.exports = app;
