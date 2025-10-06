const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
        process.exit(1);
    }

    mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));
    mongoose.connection.on('error', err => console.error('MongoDB error', err));
    mongoose.connection.on("reconnected", () => console.log("🔄 MongoDB reconnected"));
};

module.exports = connectDB;