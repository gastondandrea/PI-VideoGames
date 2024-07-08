import { filterByGenre, filterBySource } from "../../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {getAllGenres} from "../../redux/actions/actions";

import "./filter.css"

function Filter(){
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllGenres())
    }, [dispatch])

    const allGenres = useSelector((state)=>state.allGenres);

    const handleChangeGenre = (event)=>{
        dispatch(filterByGenre(event.target.value))
    };

    const handleChangeSource = (event)=>{
        dispatch(filterBySource(event.target.value))
    };

    return(
        <div className='container-filter'>
            <label>Filter:</label>
            <select name="filter-genres" defaultValue="defect" id="filter-genres" onChange={handleChangeGenre}>
                <option value="defect">All</option>
                {allGenres.map((genre, index)=>{
                    return <option key={index} value={genre.name}>{genre.name}</option>
                })}
            </select>
            <select name="filter-source" defaultValue="defect" id="filter-source" onChange={handleChangeSource}>
                <option value="defect">All</option>
                <option value="api">API</option>
                <option value="bbdd">BBDD</option>
            </select>
        </div>
    )
}

export default Filter;