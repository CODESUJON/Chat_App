import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from "cors"
import { connectDb } from './lib/db.js';
import authRoutes from './routes/auth.route.js'
import messageRoute from './routes/message.route.js'
import {app,server} from "./lib/socket.js";



dotenv.config()
// const app=express();

const PORT=process.env.PORT

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoute)

server.listen(PORT,()=>{
    console.log("server is running on port :",PORT)
    connectDb();
})