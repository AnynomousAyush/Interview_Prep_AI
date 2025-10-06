const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes
const protect = async (req, res, next) => {
    try {
        let token = req.headers.authorization;

        if (token && token.startsWith("Bearer ")) {
            token = token.split(" ")[1];  //Extract token

            //Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            //chatgpt  
            if (!decoded.id) {
                return res.status(401).json({ success: false, message: "Invalid token payload" });
            }

            req.user = await User.findById(decoded.id).select("-password");

            //chatgpt  
            if (!req.user) {
                return res.status(401).json({ success: false, message: "User not found" });
            }

            next();
        } else {
            res.status(401).json({ message: "Not authorized, no token" });
        }
    } catch (error) {
        res.status(401).json({ message: "Token failed", error: error.message });
    }
};

module.exports = { protect };