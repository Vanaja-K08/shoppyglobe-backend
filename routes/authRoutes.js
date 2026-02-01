const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const router = express.Router();

// POST /register
router.post("/register", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    email: req.body.email,
    password: hashedPassword,
  });
  await user.save();
  res.json({ message: "User registered" });
});


module.exports = router;