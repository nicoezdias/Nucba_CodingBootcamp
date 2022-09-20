import express from 'express';
import PostRoutes from './routes/Post.routes.js';
import CommentRoutes from './routes/Comment.routes.js';
import UserRoutes from './routes/User.routes.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

/* ---------------------------- Global middleware --------------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* --------------------------------- Routes --------------------------------- */
app.get('/', (req, res) => {
	res.json({ message: 'Deberias iniciar los request en /api/<entidad>' });
});
app.use('/api/post', PostRoutes);
app.use('/api/comment', CommentRoutes);
app.use('/api/user', UserRoutes);

/* -------------------------------- Up server ------------------------------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server runnig in port ${PORT}`);
});
