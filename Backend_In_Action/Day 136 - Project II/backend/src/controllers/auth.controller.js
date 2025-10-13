const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register Controller
async function registerController(req, res) {
  const { username, password } = req.body;

  const isUserExist = await userModel.findOne({
    username,
  });

  // Optionally add proper logging here in production

  if (isUserExist) {
    return res.status(409).json({
      message: "User already exist.",
    });
  }

  const newUser = await userModel.create({
    username,
    password: await bcrypt.hash(password, 10),
  });

  const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "None",
    expires: new Date(Date.now() + 8 * 3600000),
  });

  return res.status(201).json({
    message: "user created successfully.",
    user: newUser,
  });
}

// Login Controller
async function loginController(req, res) {
  const { username, password } = req.body;

  const user = await userModel.findOne({
    username,
  });

  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials.",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid credentials.",
    });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  return res.status(200).json({
    message: "Login successful.",
    user,
    token,
  });
}

// get user
async function getUserController(req, res) {
  const userId = req.userId;

  const user = await userModel.findById(userId);

  if (!user) {
    return res.status(404).json({
      message: "User not found.",
    });
  }

  return res.status(200).json({
    message: "User retrieved successfully.",
    user,
  });
}

async function logoutController(req, res) {
  res.clearCookie("token");
  return res.status(200).json({
    message: "Logout successful.",
  });
}

module.exports = {
  registerController,
  loginController,
  logoutController,
  getUserController,
};
