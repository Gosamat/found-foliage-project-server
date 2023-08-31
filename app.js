// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const myGardenRoutes = require ("./routes/user/my-garden.routes")
app.use("/mygarden", myGardenRoutes)

const plantsListRoutes = require ("./routes/plants/plants-list.routes")
app.use("/list", plantsListRoutes)
const gardenRoutes = require ("./routes/garden/garden.routes")
app.use("/garden", gardenRoutes)

const plantRoutes = require ("./routes/plants/add.plant.routes")
app.use("/plant", plantRoutes)

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
