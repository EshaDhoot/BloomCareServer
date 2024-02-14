import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;
export const secretKey = process.env.secretKey;

export const connect = async () => {
    await mongoose.connect(DB_URL);
}

