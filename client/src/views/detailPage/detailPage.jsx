import "./detailPage.css";
import DetailVideogame from "../../component/detailVideogame/detailVideogame";
import {useParams} from "react-router-dom";
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getVideogameById, cleanDetail } from "../../redux/actions/actions";
import Spinner from "../../component/spinner/spinner";

function DetailPage(){
    const {id} = useParams();
    const videogameId = useSelector((state)=>state.detailVideogame);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        setIsLoading(true); // Inicia el estado de carga
        dispatch(getVideogameById(id)).then(() => {
          setIsLoading(false); // Finaliza el estado de carga
      });
    
        return () =>{
          dispatch(cleanDetail())
        }
      },[dispatch, id])

    return(
        <div>
          {isLoading ? (
                <div className="loading-indicator">
                    <Spinner/>
                </div>
            ) :
            <DetailVideogame videogameId={videogameId}/>}
        </div>
        
    )
}

export default DetailPage;