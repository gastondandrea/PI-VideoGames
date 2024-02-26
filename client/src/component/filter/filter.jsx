import { filterByGenre, filterBySource } from "../../redux/actions/actions";
import {useDispatch} from "react-redux";

import "./filter.css"

function Filter(){
    const dispatch = useDispatch();

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
                <option value="defect">-</option>
                <option value="Action">Action</option>
                <option value="Shooter">Shooter</option>
            </select>
            <select name="filter-source" defaultValue="defect" id="filter-source" onChange={handleChangeSource}>
                <option value="defect">-</option>
                <option value="api">API</option>
                <option value="bbdd">BBDD</option>
            </select>
        </div>
    )
}

export default Filter;