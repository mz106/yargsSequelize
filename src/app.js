require("dotenv").config();
const yargs = require("yargs");
const { Sequelize } = require("sequelize");

const { addMovie, listMovies } = require('./utils/index');
const { Movie } = require("./models/models");
const connection = require("./db/connection");

const command = yargs.argv._[0];
console.log(command)
const app = async (yargsObj, command) => {
    connection.authenticate()
    try {
        if (yargs.argv._[0] === 'add') {
            await Movie.sync({alter: true});
            const movie = await addMovie({title: yargsObj.title, actor: yargsObj.actor});
        } else if (yargs.argv._[0] === 'list') {
            await listMovies({title: yargsObj.title});
        }
    } catch (error) {
        console.log(error);
    }
}; 

app(yargs.argv);