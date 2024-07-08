const axios = require('axios');
const {API_KEY} = process.env;

const getVideogameByIdControllerAPI = async (id) => {
    const infoApiDetail = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data;
    const infoApiDetailFiltrado = {
        id: infoApiDetail.id,
        nameOriginal: infoApiDetail.name_original,
        name: infoApiDetail.name,
        description: infoApiDetail.description,
        platforms: infoApiDetail.platforms.map((platform)=>platform.platform.name),
        image: infoApiDetail.background_image,
        release_date: infoApiDetail.released,
        rating: infoApiDetail.rating,
        genres: infoApiDetail.genres.map(genre=>{
            return {
                id: genre.id,
                name: genre.name
            }})
        };

    return infoApiDetailFiltrado;
};

module.exports = getVideogameByIdControllerAPI;