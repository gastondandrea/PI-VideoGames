const axios = require('axios');
const {API_KEY} = process.env;

const getVideogamesControllerAPI = async () => {
    // Obtiene 100 los videogames de la API con async await

    // let results = [];
    // for (let i = 1; i <= 5; i++) {
    //     const infoApi = (await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)).data;
    //     results = [...results, ...infoApi.results];
    // }

    // Obtiene 100 los videogames de la API con promises
    const promises = [];
    for (let i = 1; i <= 5; i++) {
        promises.push(
            axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)
                .then(response => response.data.results)
        );
    }

    // Esperar a que todas las solicitudes se completen
    const resultsArrays = await Promise.all(promises);

    // Combinar todos los resultados en un solo array
    const results = resultsArrays.flat();

    const allVideogamesAPI = results.map( (videogame)=>{
      return {
        id: videogame.id,
        name: videogame.name,
        platforms: videogame.platforms.map((platform)=>platform.platform.name),
        image: videogame.background_image,
        released: videogame.released,
        rating: videogame.rating,
        genres: videogame.genres.map((obj)=>{
          return {
            id: obj.id,
            name: obj.name
          }
        })
      }
    });

    return allVideogamesAPI;
};

module.exports = getVideogamesControllerAPI;