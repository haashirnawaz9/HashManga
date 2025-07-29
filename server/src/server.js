import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import MongoDB from './config/db.js';
import { userRouter } from './routes/user.route.js';

dotenv.config();
const PORT = process.env.PORT || 3001

const app = express();
MongoDB();

app.use(cors());
app.use(express.json())

app.use('/auth', userRouter);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`)
})