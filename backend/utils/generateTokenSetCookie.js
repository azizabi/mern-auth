import jwt from "jsonwebtoken"; // Corrected import statement

export const generateTokenSetCookie = (res, userId) => {
    // Generate JWT token
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "7d", // Token expiration time
    });

    // Set token as an HTTP-only cookie
    res.cookie("token", token, {
        httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
        secure: process.env.NODE_ENV === "production", // Use secure cookies in production
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        sameSite: "Strict", // Optional: Helps to prevent CSRF attacks
    });

    return token;
};
