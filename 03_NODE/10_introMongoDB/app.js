import express from 'express';
import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import { Post } from './routes/Post.routes.js';

const app = express();

/* ------------------------------ Load ENV vars ----------------------------- */
dotenv.config();
const PORT = process.env.PORT || 3000;

/* -------------------------------- ConnectDb ------------------------------- */
connectDB();

/* ---------------------------- Global middleware --------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* --------------------------------- Routes --------------------------------- */
app.get('/', (req, res) => {
	res.json({ message: 'Home' });
});
app.use('/post', Post);

/* -------------------------------- Up server ------------------------------- */
app.listen(PORT, () => {
	console.log(`Server runnig in port ${PORT}`);
});
