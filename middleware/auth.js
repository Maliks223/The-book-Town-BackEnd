import jwt from "jsonwebtoken";
import Admin from "../model/Admin";
import dot from "dotenv";

export const protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      //get token from header:
      token = req.headers.authorization.split(" ")[1];
      //verify the token:
      dot.config();
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      //get admin from token:

      req.admin = await Admin.findById(decoded.id).select("-password");
      next();
    } catch (err) {
      return console.log(err);
    }
  }
  if (!token) {
    res.status(401).json({ message: "Undefined Token" }); 
  }
};
