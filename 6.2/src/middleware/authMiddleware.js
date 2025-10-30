import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export default (req, res, next) => {
  const header = req.headers["authorization"];
  if (!header) return res.status(401).json({ error: "No token" });

  const token = header.split(" ")[1];
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ error: "Invalid token" });
  }
};