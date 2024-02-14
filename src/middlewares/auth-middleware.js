
export const AuthMiddleware = async (req, res, next) => {
    if(!req.body.email) {
        res.status(500).json({
            message: 'Please enter Email, Email is required',
            success: false,
        });
        // throw Error('Please enter Email, Email is required');
    }

    if(!req.body.password) {
        res.status(500).json({
            message: 'Please enter Password, Password is required',
            success: false,
        });
        // throw Error('Please enter Password, Password is required');
    }

    next();
}