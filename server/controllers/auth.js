const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const validator = require("email-validator");

// Making a User class and creating a collecting in database
const User = require("../model/userschema");

const { promisify } = require("util");
const path = require("path");
const { log } = require("console");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(422).json({ message: "Wrong Data" });
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) { 
      const isMatch = await bcrypt.compare(password, userExist.password);
      if (isMatch) {
        const token = await userExist.generateAuthToken();
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES),
          httpOnly: true,
        });
        
        return res.status(200).json({ message: "login successful" });
      } else {
        
        return res.status(200).json({ message: "Invalid credential-pass" });
      }
    } else {
      
      return res.status(200).json({ message: "Invalid credential- email" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("failed");
  }
};
exports.register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  if (!name || !email || !password || !confirmPassword || password!=confirmPassword)
    return res.status(422).send("wrong data");
  try {
    userExist = await User.findOne({ email: email });
    if (userExist)
      return res.status(422).json({ error: "User already exists" });
    const user = new User({ name, email, password});
    if (user.save())
      res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).send("failed to create");
  }
};

exports.isLoggedIn = async (req, res, next) => {
  try {
    if (req.cookies.userSave) {
      const token = req.cookies.userSave;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      db.query(
        "SELECT * FROM users WHERE id = ?",
        [decoded.id],
        (err, results) => {
          if (!results) throw new Error("User not found");
          req.user = results[0];
          return next();
        }
      );
    } else throw new Error("User not found");
  } catch (error) {
    res.status(401).send("Unauthorize: no token provided");
    return next();
  }
};
exports.logout = (req, res) => {
  res.cookie("userSave", "logout", {
    expires: new Date(Date.now() + 2 * 1000),
    httpOnly: true,
  });
  res.status(200).redirect("/");
};
