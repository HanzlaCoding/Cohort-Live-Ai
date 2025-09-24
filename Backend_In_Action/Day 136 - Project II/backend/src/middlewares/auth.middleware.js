const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authMiddleware(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById({ _id: decoded.userId });
    req.user = user;
    res.status(200).json({ message: "User login successfully!" });
    next();
  } 
  
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  authMiddleware,
};
