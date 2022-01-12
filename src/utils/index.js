const { Sequelize } = require("sequelize");
const { Movie } = require("../models/models.js");

const addMovie = async (movieObj) => {
    try {
        const movie = await Movie.create(movieObj);
        console.log(movie.rating);
    } catch (error) {
        console.log(error);
    }
};

const listMovies = async () => {
    try {
        const movies = await Movie.findAll({});
        console.log(movies.every(user => user instanceof Movie)); // true
        console.log("All movies:", JSON.stringify(movies, null, 2));
    } catch (error) {
        console.log(error);
    }
};

const updateMovie = async (movieObj) => {
    try {
        const movie = await Movie.findOne({title: movieObj.title});
        const newMovie = await movie.update(movieObj);
        console.log("new movie: ", newMovie)
    } catch (error) {
        console.log(error);
    }
};

const deleteMovie = async (movieObj) => {
    try {
        const deletedMovie = await Movie.destroy(movieObj);
        console.log("Deleted movie", deletedMovie);
    } catch (error) {
        console.log(error);
    }
};
 
module.exports = {
    addMovie,
    listMovies,
    updateMovie,
    deleteMovie
};