// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// const User = require('../models/userSchema');
import passport from "passport";
import { Strategy } from "passport-local";
import User from "../models/userSchema.js";

// const { LocalStrategy } = Strategy;

// console.log(Strategy.create);

const local = new Strategy({ usernameField: "email" }, function (
  email,
  password,
  done
) {
  // await User.findOne({ email }, function (error, user) {
  //   if (error) {
  //     console.log(`Error in finding user: ${error}`);
  //     return done(error);
  //   }

  //   if (!user || !user.isPasswordCorrect(password)) {
  //     console.log("Invalid Username/Password");
  //     return done(null, false);
  //   }
  //   return done(null, user);

  // });

  // User.findOne({ email }).then((err, user) => {
  //   console.log("result", user);
  //   if (err) {
  //     console.log(`Error in finding user: ${err}`);
  //     return done(err);
  //   }
  //   if (!user || !user.isPasswordCorrect(password)) {
  //     console.log("Invalid Username/Password");
  //     return done(null, false);
  //   }
  //   return done(null, user);
  // });

  User.findOne({ email })
    .then((user) => {
      console.log("Result :", user);
      if (!user || !user.isPasswordCorrect(password)) {
        console.log("Invalid Username/Password");
        return done(null, false);
      }
      return done(null, user);
    })
    .catch((err) => {
      console.log(err);
      return done(err);
    });
});

passport.use("local", local);

//serialize user
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

//deserialize user
passport.deserializeUser(function (id, done) {
  // User.findById(id, function (err, user) {
  //   if (err) {
  //     console.log("Error in finding user--> Passport");
  //     return done(err);
  //   }
  //   return done(null, user);
  // });

  User.findById(id)
    .then((user) => {
      console.log("Result :", user);

      return done(null, user);
    })
    .catch((err) => {
      console.log("Error in finding user--> Passport", err);
      return done(err);
    });
});

// check if user is authenticated
passport.checkAuthentication = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/users/signin");
};

// set authenticated user for views
passport.setAuthenticatedUser = function (req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
  }
  next();
};

export default passport;
