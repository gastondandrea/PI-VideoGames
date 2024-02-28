function validate({
	name,
	description,
	image,
	release_date,
	rating,
	genres,
	platforms,
}){
    const errors = {};

    if (!name) {
		errors.name = "Este campo no puede estar vacío";
	}else if (name.length < 3) {
		errors.name = "El nombre del juego no puede tener menos de 3 caracteres";
	}else if(name.length > 30) {
		errors.name = "El nombre del juego no puede superar los 30 caracteres";
	}

	if (name && !/^[A-Za-z0-9\s]+$/g.test(name)) {
		errors.name = "El nombre del juego no puede contener carácteres especiales";
	}
    

    if (!image) {
		errors.image = "Este campo no puede estar vacío";
	}

    if (!description) {
		errors.description = "Este campo no puede estar vacío";
	}else if (description.length < 20) {
		errors.description =
			"La descripción debe contener como minimo 20 caracteres";
	}

    if (rating < 1) {
		errors.rating = "El rating no puede ser menor a 1";
	} else if (rating > 10.0) {
		errors.rating = "El rating no puede ser mayor a 10";
	}
    
    if(genres.length === 0){
        errors.genres = "Debes agregar entre 1 a 6 genres";
    }else if(genres.length > 6) {
		errors.genres = "No puedes agregar mas de 6 genres";
	}


	if (platforms.length === 0) {
		errors.platforms = "Debes agregar entre 1 a 6 plataformas";
	}else if(platforms.length > 6){
        errors.platforms = "No puedes agregar mas de 6 plataformas";
    }

    return errors;
}

export default validate;