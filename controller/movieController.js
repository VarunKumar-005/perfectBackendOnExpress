import * as movieService from '../services/movieService.js';

export const postMovie = async (req, res) => {
    try {
        // UPDATED: Added 'image' to the destructuring
        const { title, director, genre, releaseYear, description, image } = req.body;

        const userId = req.user.id;

        const newMovie = await movieService.addMovie({
            title,
            director,
            genre,
            releaseYear,
            description,
            image, // Pass the image link to the service
            uploadedBy: userId
        });

        res.status(201).json({
            message: "Movie uploaded successfully",
            movie: newMovie
        });
    } catch (err) {
        res.status(400).json({ error_message: err.message });
    }
};

export const viewMovies = async (req, res) => {
    try {
        const movies = await movieService.getMovies();
        res.status(200).json(movies);
    } catch (err) {
        res.status(500).json({ error_message: err.message });
    }
};