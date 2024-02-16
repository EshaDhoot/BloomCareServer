import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { secretKey } from '../config/serverConfig.js';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required:[ true, 'Password is required']
    },
    name: {
        type: String,
        required: true
    }
}, {timestamps: true});

userSchema.pre('save', async function(next) {
    const SALT = bcrypt.genSaltSync(9);
    const encryptedPassword = bcrypt.hashSync(this.password, SALT);
    this.password = encryptedPassword;
    next();
});

userSchema.methods.comparePassword = function comapre(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, secretKey, {
        expiresIn: '1d'
    })
}

const User = mongoose.model('User', userSchema);

export default User;