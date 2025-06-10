import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";


const createToken = (id) => {
    // Adding debug for JWT_SECRET in createToken, relevant for all token creations
    console.log("DEBUG: createToken - JWT_SECRET presence:", process.env.JWT_SECRET ? '[PRESENT]' : '[NOT PRESENT]');
    if (!process.env.JWT_SECRET) {
        console.error("ERROR: JWT_SECRET environment variable is not set!");
        // You might want to throw an error here or handle it more robustly
    }
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// Route for user login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });

        if (!user) {
            return res.json({ success: false, message: "User doesn't exists" })
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = createToken(user._id)
            res.json({ success: true, token })
        }
        else {
            res.json({ success: false, message: 'Invalid credentials' })
        }

    } catch (error) {
        console.log("ERROR in loginUser:", error); // Specific error logging
        res.json({ success: false, message: error.message })
    }
}

// Route for user register
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // checking user already exists or not
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }

        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // hashing user password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log("ERROR in registerUser:", error); // Specific error logging
        res.json({ success: false, message: error.message })
    }
}

// Route for admin login
const adminLogin = async (req, res) => {
    try {
        console.log("DEBUG: --- ADMIN LOGIN ATTEMPT ---");

        const { email, password } = req.body;

        // 1. Log the data received from the frontend
        console.log("DEBUG: Admin Login - Received email:", email);
        console.log("DEBUG: Admin Login - Received password:", password ? '[PASSWORD RECEIVED]' : '[NO PASSWORD RECEIVED]'); // Indicate presence, not value

        // 2. Log the environment variables as seen by the deployed function
        const adminEmailEnv = process.env.ADMIN_EMAIL;
        const adminPasswordEnv = process.env.ADMIN_PASSWORD;
        const jwtSecretEnv = process.env.JWT_SECRET;

        console.log("DEBUG: Admin Login - ENV ADMIN_EMAIL:", adminEmailEnv);
        console.log("DEBUG: Admin Login - ENV ADMIN_PASSWORD:", adminPasswordEnv ? '[PRESENT]' : '[NOT PRESENT]'); // Indicate presence, not value
        console.log("DEBUG: Admin Login - ENV JWT_SECRET:", jwtSecretEnv ? '[PRESENT]' : '[NOT PRESENT]'); // Indicate presence, not value


        // 3. Log the direct comparison results
        const emailComparison = (email === adminEmailEnv);
        const passwordComparison = (password === adminPasswordEnv);

        console.log("DEBUG: Admin Login - Email comparison (received === env):", emailComparison);
        console.log("DEBUG: Admin Login - Password comparison (received === env):", passwordComparison);

        if (emailComparison && passwordComparison) {
            // Adding debug for JWT_SECRET usage here as well, if the condition passes
            console.log("DEBUG: Admin Login - Credentials matched. Creating token.");
            const token = jwt.sign(email + password, jwtSecretEnv); // Use the variable to be explicit
            res.json({ success: true, token })
        } else {
            console.log("DEBUG: Admin Login - Mismatch detected. Invalid credentials.");
            res.json({ success: false, message: "Invalid credentials" })
        }

    } catch (error) {
        console.log("ERROR in adminLogin catch block:", error); // More specific error log
        res.json({ success: false, message: error.message })
    }
}


export { loginUser, registerUser, adminLogin }
