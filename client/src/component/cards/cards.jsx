import "./cards.css";
import Card from "../card/card";
import {useSelector, useDispatch} from "react-redux";
import { useEffect } from "react";
import { getAllVideogames } from "../../redux/actions/actions";

function Cards(){

    const allVideogames = useSelector((state)=>state.allVideogames); 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllVideogames());
    },[dispatch]);

    return(
        <div className="container-cards">
            {allVideogames.map((videogame, index)=>{
                return <Card key={index} id={videogame.id} name={videogame.name} image={videogame.image} genres={videogame.genres}/>
            })}
        </div>
    )
}

export default Cards;