import express from 'express';
import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoute.js'; // Import movie routes

const app = express();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/movies',movieRoutes); // Register movie routes

export default app;
