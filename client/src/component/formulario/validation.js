function validate({
	name,
	description,
	image,
	rating,
	genres,
	platforms,
}){
    const errors = {};

    if (!name) {
		errors.name = "This field can not be blank";
	}else if (name.length < 3) {
		errors.name = "The game name cannot be less than 3 characters";
	}else if(name.length > 30) {
		errors.name = "The game name cannot exceed 30 characters";
	}

	if (name && !/^[A-Za-z0-9\s]+$/g.test(name)) {
		errors.name = "The game name cannot contain special characters";
	}
    

    if (!image) {
		errors.image = "This field can not be blank";
	}

    if (!description) {
		errors.description = "This field can not be blank";
	}else if (description.length < 20) {
		errors.description = "The description must contain at least 20 characters";
	}

    if (rating < 1) {
		errors.rating = "The rating cannot be less than 1";
	} else if (rating > 10.0) {
		errors.rating = "The rating cannot be greater than 10";
	}
    
    if(genres.length === 0){
        errors.genres = "This field can not be blank";
    }else if(genres.length > 6) {
		errors.genres = "";
	}


	if (platforms.length === 0) {
		errors.platforms = "This field can not be blank";
	}else if(platforms.length > 6){
        errors.platforms = "";
    }

    return errors;
}

export default validate;