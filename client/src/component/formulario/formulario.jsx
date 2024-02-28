import "./formulario.css";
import Button from "../button/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getAllGenres, postVideogames} from "../../redux/actions/actions";
import { useNavigate } from "react-router-dom";
import validation from "./validation";

function Formulario(){
    const genresAPI = useSelector((store)=>store.allGenres);
    const platformsAPI = ["PC", "PlayStation 5", "PlayStation 4", "PlayStation 3", "PlayStation 2", "PlayStation", "Wii U", "Xbox One", "Nintendo Switch", "iOS", "Android", "macOS", "Linux", "Xbox 360", "SEGA Master System"];
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getAllGenres());
    },[dispatch]);

    const [valor, setValor] = useState({
        name: "",
        image: "",
        release_date: "",
        description: "",
        rating: "5",
        genresName: [],
        genres: [],
        platforms: []
    });


    const [error, setError] = useState({
		name: "Este campo no puede estar vacío",
		image: "Este campo no puede estar vacío",
		release_date: "",
		description: "Este campo no puede estar vacío",
		rating: "",
		genres: "Debes agregar entre 1 a 6 generos",
		platforms: "Debes agregar entre 1 a 6 plataformas",
	});


    //Función handleChange
    const handleChange = (e) => {
		const { name, value } = e.target;
		setValor({ ...valor, [name]: value });
		setError(
			validation({
				...valor,
				[name]: value,
			})
		);
	};

    const handleChangePlatforms = (event) => {
        const {value} = event.target;
        if(valor.platforms.length < 6){
            if(valor.platforms.length > 0){
                const repetido = valor.platforms.every(platform => platform !== value);
                if(repetido){
                    setValor({
                        ...valor,
                        platforms:[...valor.platforms, value]
                    })
                }
            }else{
                setValor({
                    ...valor,
                    platforms:[...valor.platforms, value]
                })
            }
        }
        
    }

    const handleChangeGenres = (event) =>{
        const {value} = event.target;
        if(valor.genresName.length < 6){
            if(valor.genresName.length > 0){
                const genresAPICoinciden = genresAPI.filter(genre => value === genre.name);
                const idGenres = genresAPICoinciden.map(genre => genre.id);
                const repetido = valor.genresName.every(genre => genre !== value);
                if(repetido){
                    setValor({
                        ...valor,
                        genresName: [...valor.genresName, value],
                        genres: [...valor.genres, idGenres]
                    })
                }
            }else{
                const genresAPICoinciden = genresAPI.filter(genre => value === genre.name);
                const idGenres = genresAPICoinciden.map(genre => genre.id);
                setValor({
                    ...valor,
                    genresName: [...valor.genresName, value],
                    genres: [...valor.genres, idGenres]
                })
            }
        }
    }



    const handleClosePlatform = (name) => {
        const platformFilter = valor.platforms.filter((platform)=>{
            return platform !== name;
        })
        setValor({
            ...valor,
            platforms:[...platformFilter]
        })
    }


    const handleCloseGenre = (name) => {
        const genresFilter = valor.genresName.filter((genre)=>{
            return genre !== name;
        })
        const genresAPICoinciden = genresAPI.filter(genre => genresFilter.includes(genre.name));
        const idGenres = genresAPICoinciden.map(genre => genre.id);
        setValor({
            ...valor,
            genresName: [...genresFilter],
            genres: [...idGenres]
        })
    }


    //Función onSubmit
    const onSubmit = (event) => {
        event.preventDefault();
        dispatch(postVideogames(valor))
        navigate("/home")
    }


    return(
        <form className="container-form" onSubmit={onSubmit}>
            <div className="container-form-part line">
                <u><h3>Complete with the data of the new videogame:</h3></u>
                <div className="container-form-inputs">
                    <div className="form-input">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={valor.name} onChange={handleChange}/>
                    </div>
                    <p className="error-menssage">{error.name}</p>
                    <div className="form-input">
                        <label htmlFor="image">Image(url):</label>
                        <input type="text" name="image" value={valor.image} onChange={handleChange}/>
                    </div>
                    <p className="error-menssage">{error.image}</p>
                    <div className="form-input">
                        <label htmlFor="release_date">Release_date:</label>
                        <input type="date" name="release_date" value={valor.release_date} onChange={handleChange}/>
                    </div>
                    <div className="input-textarea">
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" cols="45" rows="5" value={valor.description} onChange={handleChange}></textarea>
                        <p className="error-menssage">{error.description}</p>
                    </div>
                </div>
            </div>
            <div className="container-form-part ">
                <div className="form-select">
                    <div>
                        <label htmlFor="platforms">Platforms:</label>
                        <select name="platforms" id="platforms" defaultValue="" onChange={handleChangePlatforms}>
                            <option value=""></option>
                            {platformsAPI.map((platform)=>{
                                return <option value={platform}>{platform}</option>
                            })}
                        </select>
                    </div>
                    <div className="wrap">
                        {valor.platforms.map((platform)=><p onClick={() => handleClosePlatform(platform)}>{platform}</p>)}
                    </div>
                    <p className="error-menssage">{error.platforms}</p>
                </div>
                <div className="form-select">
                    <div>
                        <label htmlFor="genres">Genres:</label>
                        <select name="genres" id="genres" defaultValue="" onChange={handleChangeGenres}>
                            <option value=""></option>
                            {genresAPI.map((genre)=>{
                                return <option value={genre.name}>{genre.name}</option>
                            })}
                        </select><br />
                    </div>     
                    <div className="wrap">
                        {valor.genresName.map((genre)=><p onClick={() => handleCloseGenre(genre)}>{genre}</p>)}
                    </div>               
                    <p className="error-menssage">{error.genres}</p>
                </div>
                <div className="form-range">
                    <label htmlFor="rating">Rating:</label>  
                    <input type="range" name="rating" min="1" max="10" step="0.01" value={valor.rating} onChange={handleChange}/>
                    <span>{valor.rating}</span>
                    <p className="error-menssage">{error.rating}</p>
                </div>
                <Button type="submit" name="Create"/>
            </div>
        </form>
    )
}

export default Formulario;