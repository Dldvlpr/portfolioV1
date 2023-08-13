import './about.scss';
import AnimatedLetters from "../AnimatedLetters/animatedLetters.jsx";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDocker, faJsSquare, faNodeJs, faPhp, faReact, faSymfony} from "@fortawesome/free-brands-svg-icons";

const About = () => {
    const [letterClass, setLetterClass] = useState('textAnimate')

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('textAnimateHover')
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='container aboutPage'>
            <div className='textZone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['À', ' ', 'p', 'r', 'o', 'p', 'o', 's', ' ', 'd', 'e', ' ', 'm', 'o', 'i', '.']}
                        idx={15}
                    />
                </h1>
                <p>Je m'appelle Ludovic, développeur PHP / Symfony passionné avec une solide formation en développement
                    web. Titulaire d'un titre DWWM niveau bac+2 de la Wild Code School, je suis actuellement en
                    alternance pour obtenir le titre de "Concepteur développeur d'applications" (RNCP niveau 6,
                    équivalent Bac +3/4) en septembre.</p>
                <p>Depuis mon adolescence, le domaine du multimédia a captivé mon intérêt, me conduisant naturellement
                    vers une carrière en informatique. Mon expérience professionnelle actuelle en tant que Teaching
                    Assistant à la Wild Code School me permet d'approfondir mes compétences en PHP/Symfony, me
                    spécialisant en développement back-end.</p>
                <p>Je suis déterminé à continuer à monter en compétences et à apporter une valeur ajoutée à toute équipe
                    de développement. Mon contrat professionnel se termine en septembre, et je suis enthousiaste à
                    l'idée de chercher un nouvel emploi à partir du 11 du même mois. Je suis ouvert à toutes
                    propositions et je serais ravi d'apporter ma contribution au sein de votre entreprise.</p>
            </div>
            <div className='stageCube'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faPhp} color='#8993be'/>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faSymfony} color='#000000'/>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#61DBFB'/>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faDocker} color='#61DBFB'/>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faNodeJs} color='#3c873A'/>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faJsSquare} color='#efd81d'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;