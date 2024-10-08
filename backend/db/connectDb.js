import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("DB CONNECTED: " + conn.connection.host);
    } catch (error) {
        console.log("MongoDB Connection Error: " + error);
        process.exit(1); // 1 indicates failure
    }
};
