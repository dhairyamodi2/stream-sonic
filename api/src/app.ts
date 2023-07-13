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
import trackRoutes from './modules/Tracks/tracks.routes';
import albumsRouter from './modules/Albums/albums.routes';
import artistRouter from './modules/Artists/artist.router';

app.use("/auth", authRoutes);
app.use("/user", userRoutes)
app.use("/tracks", trackRoutes);
app.use("/albums", albumsRouter);
app.use('/artists', artistRouter);
app.get("/", (req, res) => {
    res.json({
        success: true
    })
})
export default app;