import express from "express";
import dotenv from "dotenv";
import db from "./config/mongoose.js";
import session from "express-session";
import passport from "passport";
import passportLocal from "./config/passport-local-startegy.js";
import routes from "./routes/index.js";
import ejs from "ejs";
import { homePage } from "./controllers/homeController.js";
import userRoutes from "./routes/userRoutes.js";
import studentRoutes from "./routes/studentRoute.js";
import companyRoutes from "./routes/companyRoute.js";

// const dotenv = require('dotenv');
// const db = require('./config/mongoose');
// const session = require('express-session');
// const passport = require('passport');
// const passportLocal = require('./config/passport-local-startegy');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8000;

// Define routes and middleware

// dotenv.config({ path: "config/.env" });
app.set("view engine", "ejs");
app.engine("ejs", ejs.renderFile);
app.set("views", "./views");
app.use(
  session({
    //change the secrate before deployment in production mode
    secret: "hello", // SECRET is stored in the system veriable
    //if the session data is alredy stored we dont need to rewrite it again and again so this is set to false
    resave: false,
    //when the user is not logged in or identity is not establish in that case we dont need to save extra data in
    //session cookie so this is set to false
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 100 },
  })
);

//extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.use(express.urlencoded({ extended: true }));

//for static file use
app.use(express.static("./assets"));

// for authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// express router
// app.get("/", (req, res) => {
//   // Render the 'index.ejs' template
//   res.render("home", { title: "EJS Example", message: "Hello, EJS!" });
// });

// router.get("/", passport.checkAuthentication, homePage);
// router.use("/users", userRoutes);
// router.use("/students", studentRoutes);
// router.use("/company", companyRoutes);

// console.log(userRoutes);
app.use("/", routes);

app.listen(port, (err) => {
  if (err) {
    console.log(`server not running `, err);
  }
  console.log(`Server listening on port ${port}`);
});
