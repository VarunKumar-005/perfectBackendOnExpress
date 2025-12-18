import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    releaseYear: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    // NEW SECTION: Image Link
    image: {
        type: String,
        required: false // Set to true if you want to force every movie to have an image
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;