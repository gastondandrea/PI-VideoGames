import "./navBar.css";
import logo from "../../assets/img/joystick-svgrepo-com.png"
import SeachBar from "../seachBar/seachBar";
import Button from "../button/button";

function NavBar(){
    return(
        <div className="container-nav">
            <div className="logo">
                <img src={logo} alt="logo-videogame"/>
                <h3>Videogames</h3>
            </div>
            <SeachBar/>
            <Button name="Leave"/>
        </div>
    )
}

export default NavBar;