import UserService from "../services/user-service.js";
// import { handleErrors } from '../utils/error-handler.js';

const userService = new UserService();

export const signUp = async(req, res) => {
    try {
        const response  = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            data: response,
            error: {},
            message: 'Successfully created a new user'
        });
    } catch (error) {
        // const msg = handleErrors(error);
        return res.status(500).json({
            error_message: error,
            created: false
        });
    }
}

export const logIn = async(req, res) => {
    try {
        const token = await userService.signIn(req.body);
        res.cookie('jwt', token, { httpOnly: false, expiresIn: '1d '});
        res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data : token,
            err: {}
        })

    } catch (error) {
        // const msg = handleErrors(error);
        // console.log(msg)
        return res.status(500).json({
            error_message: error,
            status: false
        });
    }
}
