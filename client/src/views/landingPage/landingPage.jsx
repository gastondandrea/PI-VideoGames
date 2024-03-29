import "./landingPage.css";
import {Link} from "react-router-dom";
import Button from "../../component/button/button";
import logo from "../../assets/img/joystick-svgrepo-com.png"
import fondo from "../../assets/img/gamer-6022003_640.png"

function LandingPage() {
    return(
        <div className="container-landing">
            <img className="img-fondo" src={fondo} alt="" />
            <div className="form-landing">
                <div>
                    <img src={logo} alt="" />
                    <h1>Videogames</h1>
                </div>
                <Link to='/home'>
                    <Button name="Start"/>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage;