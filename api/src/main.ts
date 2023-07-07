import { log } from 'console';
import express from 'express';
import dotenv from 'dotenv'
import path from 'path';
import cors from 'cors';

const app = express();
app.use(cors({origin: '*'}))

app.use(express.json());

dotenv.config({
    path: path.join(__dirname, '../.env')
})

import AuthRouter from './routes'
app.use("/auth", AuthRouter);
app.listen(process.env.PORT, () => {
    log(`Server running on ${process.env.PORT}`);
})