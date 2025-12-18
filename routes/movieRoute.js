import express from 'express';
import { postMovie, viewMovies } from '../controller/movieController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// POST /movies/add - Requires user to be logged in
router.post('/add', authenticateToken, postMovie);

// GET /movies/view - Publicly accessible
router.get('/view', viewMovies);

export default router;