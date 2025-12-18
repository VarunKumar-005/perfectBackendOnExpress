import * as movieRepository from '../repository/movieRepository.js';

export const addMovie = async (movieData) => {
    // You can add validation for the image here if you want
    if (!movieData.title || !movieData.director || !movieData.genre || !movieData.releaseYear) {
        throw new Error("Title, Director, Genre, and Release Year are required");
    }
    return await movieRepository.createMovie(movieData);
};

export const getMovies = async () => {
    return await movieRepository.findAllMovies();
};