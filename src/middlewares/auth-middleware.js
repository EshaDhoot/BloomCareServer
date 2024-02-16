import User from "../models/user.js";

export const AuthMiddleware = async (req, res, next) => {
    if(!req.body.email) {
        return res.status(500).json({
            message: 'Please enter Email, Email is required',
            success: false,
        });
        // throw Error('Please enter Email, Email is required');
    }

    if(!req.body.password) {
        return res.status(500).json({
            message: 'Please enter Password, Password is required',
            success: false,
        });
        // throw Error('Please enter Password, Password is required');
    }

    if(!req.body.name) {
        return res.status(500).json({
            message: 'Please enter name, name is required',
            success: false,
        });
        // throw Error('Please enter Password, Password is required');
    }

    const user = await User.findOne({email: req.body.email});
    if(user) {
        return res.status(500).json({
            message: 'User with this email already exists',
            success: false,
        });
    }

    next();
}

