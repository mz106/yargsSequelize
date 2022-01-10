const { Sequelize } = require("sequelize");
const { Movie } = require("../models/models.js");

const addMovie = async (movieObj) => {
    console.log("add movie hit")
    try {
        const movie = await Movie.create(movieObj);
        console.log(movie);
    } catch (error) {
        console.log(error);
    }
};

const listMovies = async (movieObj) => {
    console.log("list Movies hit")
    try {
        // const movies = await Movie.findOne({where: {title: movieObj.title}});
        const movies = await Movie.findAll({});
        console.log(movies.every(user => user instanceof Movie)); // true
        console.log("All movies:", JSON.stringify(movies, null, 2));
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    addMovie,
    listMovies
};