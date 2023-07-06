// const express = require("express");
import express from "express";
import passport from "passport";

import userRoutes from "./userRoutes.js";
import studentRoutes from "./studentRoute.js";
import { homePage } from "../controllers/homeController.js";
import companyRoutes from "./companyRoute.js";

const router = express.Router();
// const userRoutes = require("./userRoutes");
// const studentRoutes = require("./studentRoute");
// const homeController = require("../controllers/homeController");
// const companyRoutes = require("./companyRoute");
// const passport = require("passport");

router.get("/", passport.checkAuthentication, homePage);
router.use("/users", userRoutes);
router.use("/students", studentRoutes);
router.use("/company", companyRoutes);

// console.log(userRoutes, studentRoutes, companyRoutes);

export default router;
