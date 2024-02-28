import "./filterBar.css";
import {Link} from "react-router-dom";
import Order from "../order/order";
import Filter from "../filter/filter";
import Button from "../button/button"

function FilterBar(){
    return(
        <div className='container-filterbar'>
            <Order/>
            <Filter/>
            <Link to="/form">
                <Button name="Add Videogame"/>
            </Link>
        </div>
    )
}

export default FilterBar;