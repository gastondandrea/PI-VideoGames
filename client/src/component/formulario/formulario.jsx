import "./formulario.css";

function Formulario(){
    return(
        <form className="container-form">
            <div className="container-form-part line">
                <u><h3>Complete with the data of the new videogame:</h3></u>
                <div className="container-form-inputs">
                    <div className="form-input">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" value="" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="image">Image(url):</label>
                        <input type="text" name="image" value="" />
                    </div>
                    <div className="form-input">
                        <label htmlFor="release_date">Release_date:</label>
                        <input type="text" name="release_date" value="" />
                    </div>
                    <div className="input-textarea">
                        <label htmlFor="description">Description:</label>
                        <textarea name="description" cols="45" rows="5"></textarea>
                    </div>
                </div>
            </div>
            <div className="container-form-part ">
                <div className="form-select">
                    <div>
                        <label htmlFor="plataforms">Plataforms:</label>
                        <select name="plataforms" id="plataforms" defaultValue="defect">
                            <option value="defect"></option>
                            <option value="PC">PC</option>
                            <option value="X-Box">X-Box</option>
                            <option value="Play Station">Play Station</option>
                        </select>
                    </div>
                    <textarea name="plataforms" cols="45" rows="5"></textarea>
                </div>
                <div className="form-select">
                    <div>
                        <label htmlFor="genres">Genres:</label>
                        <select name="genres" id="genres" defaultValue="defect">
                            <option value="defect"></option>
                            <option value="Action">Action</option>
                            <option value="Aventure">Aventure</option>
                            <option value="Dram">Dram</option>
                        </select>
                    </div>                    
                    <textarea name="genres" cols="45" rows="5"></textarea>
                </div>
                <div className="form-range">
                    <label htmlFor="rating">Rating:</label>  
                    <input type="range" name="rating" min="1" max="10" step="0.01"/>
                </div>
            </div>
        </form>
    )
}

export default Formulario;