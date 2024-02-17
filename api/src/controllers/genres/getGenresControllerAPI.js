const axios = require('axios');
const {API_KEY} = process.env;

const getGenresControllerAPI = async () => {
    // Obtiene todos los tipos de la API
    const infoAPI = (await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)).data;
    const {results} = infoAPI;
    const allGenresAPIFiltrados = results.map((obj) => {
        return {
            id: obj.id,
            name: obj.name,
        };
    });
    return allGenresAPIFiltrados;
}

module.exports = getGenresControllerAPI;