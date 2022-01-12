require("dotenv").config();
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const argv = yargs(hideBin(process.argv)).argv;
console.log(argv);
const { Sequelize } = require("sequelize");

const { addMovie, listMovies, updateMovie, deleteMovie } = require('./utils/index');
const { Movie } = require("./models/models");
const connection = require("./db/connection");


const app = async (commandLineInput) => {
    connection.authenticate()
    try {
        if (commandLineInput.add) {
            await Movie.sync({alter: true});
            const movie = await addMovie({title: commandLineInput.title, actor: commandLineInput.actor, rating: commandLineInput.rating});
        } else if (commandLineInput.list) {
            await listMovies();
        } else if (commandLineInput.update) {
            await updateMovie({title: commandLineInput.actor}, {
                where: {
                    title: commandLineInput.title
                }
            });
        } else if (commandLineInput.delete) {
            await deleteMovie({where: {title: commandLineInput.title}});
        }

        await connection.close();
        process.exit();

    } catch (error) {
        console.log(error);
    }
}; 

app(argv);