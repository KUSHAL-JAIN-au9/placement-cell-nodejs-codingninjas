// const express = require('express');
// const passport = require('passport');

import express from "express";
import passport from "passport";

const router = express.Router();

// const studentController = require("../controllers/studentController");
import {
  createStudent,
  createStudentPage,
  deleteStudent,
} from "../controllers/studentController.js";

// ------------------ Get requests ------------
router.get(
  "/create",
  passport.checkAuthentication,
  //   studentController.createStudentPage
  createStudentPage
);

router.get("/delete/:id", passport.checkAuthentication, deleteStudent);

// ------------------- Posts Requests ----------
router.post("/create-student", passport.checkAuthentication, createStudent);

export default router;
