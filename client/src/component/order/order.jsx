import "./order.css";
import {useDispatch} from "react-redux";
import { orderVideogames } from "../../redux/actions/actions";

function Order(){
    const dispatch = useDispatch();

    const handlerChange = (event) =>{
        dispatch(orderVideogames(event.target.value));
    }
    
    return(
        <div className='container-order'>
            <label>Order:</label>
            <select name="order" defaultValue="-" id="order" onChange={handlerChange}>
                <option value="-">-</option>
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
                <option value="higher-rating">Higher Rating</option>
                <option value="lower-rating">Lower Rating</option>
            </select>
        </div>
    )
}

export default Order;