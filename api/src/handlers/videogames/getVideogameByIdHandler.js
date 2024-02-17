const getVideogameByIdControllerAPI = require('../../controllers/videogames/getVideogameByIdControllerAPI');
const getVideogameByIdControllerDB = require('../../controllers/videogames/getVideogameByIdControllerDB');
// Devuelve el detalle del pokemon por id
const getVideogameByIdHandler = async (req, res) => {
    //obtenemos el id por params
    const {id} = req.params;
    try {
        if(isNaN(id)){
            const videogameByIdDB = await getVideogameByIdControllerDB(id);
            res.status(200).json(videogameByIdDB);
        }else{
            const videogameByIdAPI = await getVideogameByIdControllerAPI(id);
            res.status(200).json(videogameByIdAPI);
        }
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getVideogameByIdHandler;