import "./card.css";
import {Link} from 'react-router-dom';

function Card(props){
    return(
        <div className="container-card">
            <Link to={`/detail/${props.id}`}>
                <h3>{props.name}</h3>
            </Link>
            <div className="container-image">
                <img src={props.image} alt={props.name} />
            </div>
            <div className="container-genres">
                {props.genres.map((genre, index)=>{
                    return <p key={index}>{genre.name}</p>
                })}
            </div>
           
        </div>
    )
}

export default Card;