import { Link } from "react-router-dom";
import homeButton from '../assets/home-button.png'

function Header() {
    return(
        <div className="header-container">
            <Link to={'/'}><img className="home-button" src={homeButton} alt="home"/></Link>
        </div>
    )
}

export default Header;