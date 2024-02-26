import "./formulario.css";
import Button from "../button/button"
import { useState } from "react";
function Formulario(){
    const [valor, setValor] = useState({
        name: "",
        image: "",
        release_date: "",
        description: "",
        rating: "5"
    });

    const [platforms, setPlatforms] = useState([]);

    const [genres, setGenres] = useState([]);


    //Función handleChange
    const handleChange = (event) => {
        const {name, value} = event.target;
        setValor({
            ...valor,
            [name]:value
        })
    }

    const handleChangePlatforms = (event) => {
        const {value} = event.target;
        if(platforms.length > 0){
            const repetido = platforms.every(platform => platform.name !== value);
            if(repetido){
                setPlatforms([...platforms, {name: value}])
            }
        }else{
            setPlatforms([...platforms, {name: value}])
        }
    }

    const handleChangeGenres = (event) =>{
        const {value} = event.target;
        if(genres.length > 0){
            const repetido = genres.every(genre => genre.name !== value);
            if(repetido){
                setGenres([...genres, {name: value}])
            }
        }else{
            setGenres([...genres, {name: value}])
        }
    }

    //Función handleSubmit

    const handleClosePlatform = (name) => {
        const platformFilter = platforms.filter((platform)=>{
            return platform.name !== name;
        })
        setPlatforms([...platformFilter])
    }


    const handleCloseGenre = (name) => {
        const genresFilter = genres.filter((genre)=>{
            return genre.name !== name;
        })
        setGenres([...genresFilter])
    }

    return(
        <form className="container-form">
            <div className="container-form-part line">
                <u><h3>Complete with the data of the new videogame:</h3></u>
                <div className="container-form-inputs">
                    <div className="form-input">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value={valor.name} onChange={handleChange} />
                        <p>{valor.name}</p>
                    </div>
                    <div className="form-input">
                        <label htmlFor="image">Image(url):</label>
                        <input type="text" name="image" value={valor.image} onChange={handleChange}/>
                        <p>{valor.image}</p>
                    </div>
                    <div className="form-input">
                        <label htmlFor="release_date">Release_date:</label>
                        <input type="text" name="release_date" value={valor.release_date} onChange={handleChange}/>
                        <p>{valor.release_date}</p>
                    </div>
                    <div className="input-textarea">
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" cols="45" rows="5" value={valor.description} onChange={handleChange}></textarea>
                        <p>{valor.description}</p>
                    </div>
                </div>
            </div>
            <div className="container-form-part ">
                <div className="form-select">
                    <div>
                        <label htmlFor="platforms">Platforms:</label>
                        <select name="platforms" id="platforms" defaultValue="" onChange={handleChangePlatforms}>
                            <option value=""></option>
                            <option value="PC">PC</option>
                            <option value="X-Box">X-Box</option>
                            <option value="Play Station">Play Station</option>
                        </select>
                        
                    </div>
                    <div>
                        {platforms.map((platform)=><p onClick={() => handleClosePlatform(platform.name)}>{platform.name}</p>)}
                    </div>
                    
                </div>
                <div className="form-select">
                    <div>
                        <label htmlFor="genres">Genres:</label>
                        <select name="genres" id="genres" defaultValue="" onChange={handleChangeGenres}>
                            <option value=""></option>
                            <option value="Action">Action</option>
                            <option value="Aventure">Aventure</option>
                            <option value="Dram">Dram</option>
                        </select><br />
                    </div>     
                    <div>
                        {genres.map((genre)=><p onClick={() => handleCloseGenre(genre.name)}>{genre.name}</p>)}
                    </div>               
                </div>
                <div className="form-range">
                    <label htmlFor="rating">Rating:</label>  
                    <input type="range" name="rating" min="1" max="10" step="0.01" value={valor.rating} onChange={handleChange}/>
                    <span>{valor.rating}</span>
                </div>
                <Button name="Create"/>
            </div>
        </form>
    )
}

export default Formulario;