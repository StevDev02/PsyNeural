const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { json } = require("express");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1] || "";
  try {
    const verified = jwt.verify(token, JWT_SECRET);
    if (!verified) {
      return res.status(403).json({
        status: false,
        statusCode: res.statusCode,
        message: "No hay usuario",
        data: null
      })
    }

    global[`currentuser`] = verified.user;
    next();
  } catch (error) {
    // console.error("error:", error);
    next(error.message);
  }
};

module.exports = {
  authenticate,
};
