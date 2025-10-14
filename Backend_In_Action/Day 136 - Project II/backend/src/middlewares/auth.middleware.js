const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {

  const token = req.cookies.token || localStorage.getItem("token");

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById({ _id: decoded.userId });
    req.user = user;
    return next();
    
  } 
  
  catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  authUser,
};