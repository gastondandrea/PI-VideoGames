import "./filterBar.css";
import Order from "../order/order";
import Filter from "../filter/filter";
import Button from "../button/button"

function FilterBar(){
    return(
        <div className='container-filterbar'>
            <Order/>
            <Filter/>
            <Button name="Add Videogame"/>
        </div>
    )
}

export default FilterBar;