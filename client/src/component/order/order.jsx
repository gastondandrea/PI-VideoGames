import "./order.css";

function Order(){
    return(
        <div className='container-order'>
            <label>Order:</label>
            <select name="order" defaultValue="ascendente" id="order">
                <option value="ascendente">A-Z</option>
                <option value="descendente">Z-A</option>
                <option value="higher-rating">Higher Rating</option>
                <option value="lower-rating">Higher Rating</option>
            </select>
        </div>
    )
}

export default Order;