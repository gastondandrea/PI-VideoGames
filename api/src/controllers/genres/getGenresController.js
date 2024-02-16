const { Genre } = require('../../db');
const axios = require('axios');
const {API_KEY} = process.env;

const getGenresController = async () => {
    // Obtiene todos los tipos de la API
    const infoAPI = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data;
    const {results} = infoAPI;
    const allGenresAPIFiltrados = results.map((obj) => {
        return {
            id: obj.id,
            name: obj.name,
        };
    });
    // Inserta todos los genres en la BDD si no existen
    for (const genre of allGenresAPIFiltrados) {
        await Genre.findOrCreate({ where: { name: genre.name} });
    }
    return allGenresAPIFiltrados;
}

module.exports = getGenresController;