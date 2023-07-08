import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
const app = express();


app.use(cors({origin: '*'}))

app.use(express.json());

dotenv.config({
    path: path.join(__dirname, '../.env')
})
import authRoutes from './modules/User/Auth/AuthRoutes';
import userRoutes from './modules/User/user.routes';
app.use("/auth", authRoutes);
app.use("/user", userRoutes)

app.get("/", (req, res) => {
    res.json({
        success: true
    })
})
export default app;