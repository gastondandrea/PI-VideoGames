import "./navBar.css";
import {Link} from "react-router-dom";
import logo from "../../assets/img/joystick-svgrepo-com.png"
import SeachBar from "../seachBar/seachBar";
import Button from "../button/button";

function NavBar(){
    return(
        <div className="container-nav">
           
            <div className="logo">
            <Link to="home">  
                <img src={logo} alt="logo-videogame"/>
            </Link>
                <h3>Videogames</h3>
            </div>
            
            <SeachBar/>
            <Link to='/'>
                <Button name="Leave"/>
            </Link>
        </div>
    )
}

export default NavBar;