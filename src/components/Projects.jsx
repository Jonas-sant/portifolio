import '../assets/styles/components/projects.scss';
import DefaultImg from '../assets/img/imgSite.png';

import {FaGithub} from "react-icons/fa";

function Projects(){
    return (
    <section>
            <h1 className="titleSection">Projetos</h1>
            <div className="containerProjects">
                <div className="cardProject">
                    <div className="cardImageProject">
                        <img src={DefaultImg} width={270}/>
                    </div>
                    <div className="cardContentProject">
                        <h3>Projeto 1</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        <div className="actionCardProject">
                            <a href="#">
                                <FaGithub size={25}/>
                            </a>
                            <button>Ver Mais</button>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
}

export default Projects;
