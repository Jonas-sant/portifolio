import '../assets/styles/components/myskills.scss'; 
import imgSkill from '../assets/img/fundo-skills.png';
import HtmlCssJs from '../assets/img/HTML-JS-CSS.svg';
import ReactJS from '../assets/img/react.svg';
import Sass from '../assets/img/sass.svg';
import Bootstrap from '../assets/img/bootstrap.svg';
import Next from '../assets/img/next-js.svg';
import Figma from '../assets/img/figma.svg';
import Photoshop from '../assets/img/photoshop.svg';
import Php from '../assets/img/php.svg';
import Laravel from '../assets/img/laravel.svg';
import NodeJS from '../assets/img/nodejs.svg';
import ReactNative from '../assets/img/react-native.svg';
import MySql from '../assets/img/mysql.svg';

function MySkills(){
    return (
        <>
            <h1 className="titleSkills">Minhas Skills</h1>
            <div className="skillsItems">
                <div className="skillsLeft">
                    <div className="cardSkills">
                        <h3>Front-End</h3>
                        <ul>
                            <li>
                                <img src={HtmlCssJs} width={45}/>
                                <span>HTML5, CSS3, JavaScript</span>
                            </li>
                            <li>
                                <img src={Sass} width={25} height={25}/>
                                <span>Sass</span>
                            </li>
                            <li>
                                <img src={Bootstrap} width={25} height={25}/>
                                <span>Bootstrap5</span>
                            </li>
                            <li>
                            <img src={ReactJS} width={25} height={25}/>
                                <span>React.JS</span>
                            </li>
                            <li>
                                <img src={Next} width={25} height={25}/>
                                <span>Next.JS</span>
                            </li>
                        </ul>
                    </div>
                    <div className="cardSkills">
                        <h3>Back-End</h3>
                        <ul>
                            <li>
                                <img src={Php} width={25} height={25}/>
                                <span>PHP</span>
                            </li>
                            <li>
                                <img src={Laravel} width={25} height={25}/>
                                <span>Laravel</span>
                            </li>
                            <li>
                                <img src={NodeJS} width={25} height={25}/>
                                <span>Node.JS</span>
                            </li>
                        </ul>
                    </div>
                    <div className="cardSkills">
                        <h3>Prototipação</h3>
                        <ul>
                            <li>
                                <img src={Figma} width={25} height={25}/>
                                <span>Figma</span>
                            </li>
                            <li>
                                <img src={Photoshop} width={25} height={25}/>
                                <span>Photoshop</span>
                            </li>
                        </ul>
                    </div>
                    <div className="cardSkills">
                        <h3>Banco de Dados</h3>
                        <ul>   
                            <li>
                                <img src={MySql} width={25} height={25}/>
                                <span>MySql</span>
                            </li>
                        </ul>
                    </div>
                    
                </div>
                <div className="skillsRight">
                        <div className="cardSkills">
                            <h3>Mobile</h3>
                            <ul>
                                <li>
                                <img src={ReactNative} width={25} height={25}/>
                                    <span>React Native</span>
                                </li>
                            </ul>
                        </div>
                        <img className="imgSkills" src={imgSkill} />
                </div>

            </div>
        </>
    );
}

export default MySkills;