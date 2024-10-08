import express from 'express';
import dotenv from 'dotenv';
import router from './routes/authRoute.js';
import cookieParser from 'cookie-parser';
import path from 'path'
import cors from 'cors';
import { connectDb } from './db/connectDb.js';

// Load environment variables
dotenv.config();

// Initialize express app
const app = express();
const __dirname=path.resolve()
// Middleware
app.use(cors({
  origin: "http://localhost:5173", // Frontend origin
  credentials: true
}));

app.use(cookieParser());
app.use(express.json()); // Allows us to parse incoming req body

// Routes
app.use('/api/auth', router);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Start server and connect to DB
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await connectDb(); // Make sure DB connects before the app runs
    console.log(`Space is live on port ${PORT}`);
  } catch (error) {
    console.error("Database connection failed", error);
    process.exit(1); // Exit the app if DB connection fails
  }
});
