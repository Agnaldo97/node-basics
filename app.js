const http = require("http");
const express = require("express");
const logger = require("./middleware/logger");
const app = express();
const morgan = require("morgan");
const config = require("config");
const routesUser = require("./routes/user");
const routesItems = require("./routes/item");

// Mongodb Connection
//let MongoConnection = require("./config/mongodb");
//const mongodb = new MongoConnection();

// Restful Apis using Express Framework

//Express middleware for parsing josn data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// stactic files path
app.use(express.static("public"));

//View Engine Settings
app.set("view engine", "pug");
app.set("views", "./views");

// Middleware functions
app.use(logger);

//Middleware Morgan for loggin Request on console
if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  console.log("Morgan Enabled....");
}

//Envirnment Configurations
console.log(`Application name: ${config.get("name")}`);
console.log(`Mail server name: ${config.get("mail.host")}`);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Express App",
    message: `Instafix server is running on port 3000`
  });
});
// user routes
app.use("/api/user", routesUser);
app.use("/api/item", routesItems);

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
