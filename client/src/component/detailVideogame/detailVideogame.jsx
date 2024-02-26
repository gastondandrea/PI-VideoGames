import "./detailVideogame.css";

function DetailVideogame({videogameId}){

    return(
        <div className="container-detail">
            <div className="container-detail-1">
                {videogameId.id}
                <img src={videogameId.image} alt={videogameId.name} />
                <div className="container-platforms">
                    {videogameId.platforms?.map((platform)=>{
                        return <p>{platform}</p>
                    })}
                </div>
            </div>
            <div className="container-detail-2">
                <h2>{videogameId.name}</h2>
                <div>
                    {videogameId.description}
                </div>
                <div className="container-genres">
                    {videogameId.genres?.map((genre)=>{
                        return <p>{genre.name}</p>
                    })}
                </div>
                <p>Release date: {videogameId.release_date}</p>
                <p>Rating: {videogameId.rating}</p>
            </div>
        </div>
    )
}

export default DetailVideogame;