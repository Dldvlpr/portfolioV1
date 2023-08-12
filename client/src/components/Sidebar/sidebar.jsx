import './sidebar.scss';
import {Link, NavLink} from "react-router-dom";
import LogoD from "../../assets/images/logoD.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

function Sidebar() {
    return (
        <div className='navbar'>
            <Link className='logo' to='/'>
                <img src={LogoD}/>
            </Link>
            <nav>
                <NavLink exact="true" to="/" activeclassname="active">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" to="/about" className="aboutLink" activeclassname="active">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
                </NavLink>
                <NavLink exact="true" to="/contact" className="contactLink" activeclassname="active">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dormoy-ludovic">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://www.github.com/dldvlpr">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;