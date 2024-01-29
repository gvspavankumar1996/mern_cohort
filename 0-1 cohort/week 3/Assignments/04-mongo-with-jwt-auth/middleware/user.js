const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  try {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const jwtToken = token.split(" ")[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    console.log(decodedValue, "decoded value");
    if (decodedValue.username) {
      req.username = decodedValue.username;
      next();
    } else {
      res.status(403).json({ msg: "you are not authentictaed" });
    }
  } catch (error) {
    res.status(403).json({
      msg: "you are not Authenticated!",
    });
  }
}

module.exports = userMiddleware;
