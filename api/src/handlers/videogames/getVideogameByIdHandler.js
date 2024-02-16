const getVideogameByIdController = require('../../controllers/videogames/getVideogameByIdController');

// Devuelve el detalle del pokemon por id
const getVideogameByIdHandler = async (req, res) => {
    //obtenemos el id por params
    const {id} = req.params;
    //asignamos el source segun el tipo de id que obtenemos
    const source = isNaN(id) ? "bdd" : "api";
    try {
        const videogameById = await getVideogameByIdController(id, source);
        res.status(200).json(videogameById);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

module.exports = getVideogameByIdHandler;