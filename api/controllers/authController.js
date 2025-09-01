// import User from "../models/User.js";
// import jwt from "jsonwebtoken";

// const signToken = (id) => {
// 	// jwt token
// 	return jwt.sign({ id }, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", {
// 		expiresIn: "7d",
// 	});
// };

// export const signup = async (req, res) => {
// 	const { name, email, password, age, gender, genderPreference } = req.body;
// 	try {
// 		if (!name || !email || !password || !age || !gender || !genderPreference) {
// 			return res.status(400).json({
// 				success: false,
// 				message: "All fields are required",
// 			});
// 		}

// 		if (age < 18) {
// 			return res.status(400).json({
// 				success: false,
// 				message: "You must at lest 18 years old",
// 			});
// 		}

// 		if (password.length < 6) {
// 			return res.status(400).json({
// 				success: false,
// 				message: "Password must be at least 6 characters",
// 			});
// 		}

// 		const newUser = await User.create({
// 			name,
// 			email,
// 			password,
// 			age,
// 			gender,
// 			genderPreference,	
// 		});

// 		const token = signToken(newUser._id);

// 		res.cookie("jwt", token, {
// 			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
// 			httpOnly: true, // prevents XSS attacks
// 			sameSite: "strict", // prevents CSRF attacks
// 			secure: true,
// 		});

// 		res.status(201).json({
// 			success: true,
// 			user: newUser,
// 		});
// 	} catch (error) {
// 		console.log("Error in signup controller:", error);
// 		res.status(500).json({ success: false, message: "Server Error" });
// 	}
// };
// export const login = async (req, res) => {
// 	const { email, password } = req.body;
// 	console.log(email, password);
// 	try {
// 		if (!email || !password) {
// 			return res.status(400).json({
// 				success: false,
// 				message: "All fields are required",
// 			});
// 		}

// 		const user = await User.findOne({ email }).select("+password");
// 		console.log(user);
// 		// if (us || )) {
// 		// 	return res.status(401).json({
// 		// 		success: false,
// 		// 		message: "Invalid email or password",
// 		// 	});
// 		// }

// 		if(!user){
// 			return res.status(401).json({
// 				success: false,
// 				message: "Invalid email ",
// 			});
// 		}
// 		if(user.password !== password){
// 			return res.status(401).json({
// 				success: false,
// 				message: "Invalid password",
// 			});
// 		}

// 		const token = signToken(user._id);
// 		console.log("sample output");
// 		console.log("token", token);
// 		res.cookie("jwt", token, {
// 			maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
// 			httpOnly: true, // prevents XSS attacks
// 			sameSite: "strict", // prevents CSRF attacks
// 			secure: true,
// 		});
// 		console.log(token);
// 		res.status(200).json({
// 			success: true,
// 			user,
// 		});
// 	} catch (error) {
// 		console.log("Error in login controller:", error);
// 		res.status(500).json({ success: false, message: "Server error" });
// 	}
// };
// export const logout = async (req, res) => {
// 	res.clearCookie("jwt");
// 	res.status(200).json({ success: true, message: "Logged out successfully" });
// };



import User from "../models/User.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
    return jwt.sign({ id }, "ABCDEFGHIJKLMNOPQRSTUVWXYZ", {
        expiresIn: "7d",
    });
};

export const signup = async (req, res) => {
    const { name, email, password, age, gender, genderPreference } = req.body;
    console.log("Signup request body:", req.body); // Debugging

    try {
        // Validation
        if (!name || !email || !password || !age || !gender || !genderPreference) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        if (age < 18) {
            return res.status(400).json({
                success: false,
                message: "You must be at least 18 years old",
            });
        }

        if (password.length < 6) {
            return res.status(400).json({
                success: false,
                message: "Password must be at least 6 characters",
            });
        }

        // Check if email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "Email is already registered",
            });
        }

        // Create new user
        const newUser = await User.create({
            name,
            email,
            password,
            age,
            gender,
            genderPreference,
        });

        // Generate JWT token
        const token = signToken(newUser._id);

        // Set cookie
        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production", // local dev fix
        });

        res.status(201).json({
            success: true,
            user: newUser,
        });

    } catch (error) {
        console.error("Error in signup controller:", error); // Full error log
        res.status(500).json({ success: false, message: error.message || "Server Error" });
    }
};

export const login = async (req, res) => {
    const { email, password } = req.body;
    console.log("Login request body:", req.body); // Debugging

    try {
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const user = await User.findOne({ email }).select("+password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email",
            });
        }

        if (user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid password",
            });
        }

        const token = signToken(user._id);

        res.cookie("jwt", token, {
            maxAge: 7 * 24 * 60 * 60 * 1000,
            httpOnly: true,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        });

        res.status(200).json({
            success: true,
            user,
        });

    } catch (error) {
        console.error("Error in login controller:", error);
        res.status(500).json({ success: false, message: error.message || "Server error" });
    }
};

export const logout = async (req, res) => {
    res.clearCookie("jwt");
    res.status(200).json({ success: true, message: "Logged out successfully" });
};
