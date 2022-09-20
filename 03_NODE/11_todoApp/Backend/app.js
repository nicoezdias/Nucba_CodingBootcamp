import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import { todoRouter } from './routes/todo.routes.js';

const app = express();

/* ------------------------------ Load ENV vars ----------------------------- */
dotenv.config();
const PORT = process.env.PORT || 4500;

/* -------------------------------- ConnectDb ------------------------------- */
connectDB();

/* ------------------------------- Cors enable ------------------------------ */
app.use(cors());

/* ---------------------------- Global middleware --------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* --------------------------------- Routes --------------------------------- */
app.get('/', (req, res) => {
	res.json({ message: 'Deberias iniciar los request en /api/v1/<entidad>' });
});
app.use('/api/v1/todo', todoRouter);

/* -------------------------------- Up server ------------------------------- */
app.listen(PORT, () => {
	console.log(`Server runnig in port ${PORT}`);
});
