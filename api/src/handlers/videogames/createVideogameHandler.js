const createVideogameController = require('../../controllers/videogames/createVideogameController');

// Maneja la creación de un videogame en la Base de Datos
const createVideogameHandler = async (req, res) => {
    //obtenemos los datos del videogame por body
    const videogame = req.body;
    try {
        const response = await createVideogameController(videogame);
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};


module.exports = createVideogameHandler;