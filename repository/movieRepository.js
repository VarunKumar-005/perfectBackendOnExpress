import Movie from '../models/Movie.js';

export const createMovie = async (movieData) => {
    return await Movie.create(movieData);
};

export const findAllMovies = async () => {
    return await Movie.find().populate('uploadedBy', 'name email');
};