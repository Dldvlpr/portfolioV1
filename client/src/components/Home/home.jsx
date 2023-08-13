import './home.scss'
import logoBig from "../../assets/images/logoD.png";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import AnimatedLetters from "../AnimatedLetters/animatedLetters.jsx";
import profilPicture from "../../assets/images/profilPicture.png";

const Home = () => {
    const [letterClass, setLetterClass] = useState('textAnimate')
    const nameArray = ['o', 'r', 'm', 'o', 'y', '.', 'D', 'E', 'V'];
    const jobArray = ['d', 'é', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'u', 'r', ' ', 'w', 'e', 'b'];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('textAnimateHover')
        }, 4000);

        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="container homePage">
            <div className="textZone">
                <h1>
                    <img src={logoBig}/>
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={nameArray}
                                     idx={12}/>
                    <br/>
                    <AnimatedLetters letterClass={letterClass}
                                     strArray={jobArray}
                                     idx={21}/>
                </h1>
                <h2>$stacks = ["PHP", "Symfony", "React"] </h2>
                <Link to="/contact" className="flatButton">Contactez-Moi</Link>
            </div>
        </div>
    )
}

export default Home;
