import express from "express";
import passport from "passport";

const router = express.Router();

import {
  createSession,
  createUser,
  downloadCsv,
  signin,
  signout,
  signup,
} from "../controllers/userControllers.js";

// ------------------------- Get Requests -----------------------

router.get("/signup", signup);
router.get("/signin", signin);
router.get("/signout", passport.checkAuthentication, signout);
router.get("/download-csv", passport.checkAuthentication, downloadCsv);
// ------------------------- Post Request -----------------------

router.post("/create", createUser);
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/users/signin" }),
  createSession
);

export default router;
