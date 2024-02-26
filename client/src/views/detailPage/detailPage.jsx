import "./detailPage.css";
import DetailVideogame from "../../component/detailVideogame/detailVideogame";
import {useParams} from "react-router-dom";
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getVideogameById, cleanDetail } from "../../redux/actions/actions";

function DetailPage(){
    const {id} = useParams();
    const videogameId = useSelector((state)=>state.detailVideogame);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVideogameById(id));
    
        return () =>{
          dispatch(cleanDetail())
        }
      },[dispatch, id])

    return(
        <div>
            <DetailVideogame videogameId={videogameId}/>
        </div>
    )
}

export default DetailPage;