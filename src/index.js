import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import { PORT, connect } from './config/serverConfig.js';
import ApiRoutes from './routes/index.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('hey');
  });
app.use('/BloomCare', ApiRoutes);

const setupAndStartServer  = async () => {
    app.listen(PORT, async () => {
        console.log(`Server started at PORT: ${PORT}`);
        await connect();
        console.log('MongoDB connected');
    });
}

setupAndStartServer();