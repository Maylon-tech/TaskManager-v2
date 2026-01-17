import User from '../model/userModel.js'

//REGISTER ASYNC FUNCTION

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    
    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required." })
    }
    if (!validator.isEmail(email)) {
        return res.status(400).josn({ success: false, message: "Invalid Email"})
    }
    if (password.length < 8) {
        return res.status(400).json({ success: false, message: "Password must be atleast 8 characters" })
    }

    try {
        if (await User.findOne({ email })) {
            return res.status(409).json({success: false, message: "User already exist" })
        }

        const hashed = await bcrypt.hash(password, 10)
    }

}