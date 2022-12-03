import SocialNetwork from './SocialNetworks';

import '../assets/styles/components/sidebar.scss';
import Avatar from '../assets/img/picture_profile.png';
import Gmail from '../assets/img/gmail.svg';
import Whatsapp from '../assets/img/whatsapp.svg';
import Telegram from '../assets/img/telegram.svg';

function SideBar(){
    return(
        <aside id="sidebar">
            
            <img className="profilePicture" src={Avatar} alt="Jonas Santos" />
            <SocialNetwork />
            
                <ul>
                    <li>
                        <div className="itemList">
                            <div className="imgWrapper">
                                <img src={Gmail} width={40} height={40}/>
                            </div>
                            <div>
                                <h4>E-mail</h4>
                                <span>jonas.santos9708@gmail.com</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="itemList">
                            <div className="imgWrapper">
                                <img src={Whatsapp} width={50} height={50}/>    
                            </div>
                            <div>
                                <h4>Whatsapp</h4>
                                <span>+55 19 993459829</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="itemList">
                            <div className="imgWrapper">
                                <img src={Telegram} width={40} height={40}/>
                            </div>                        
                            <div>
                                <h4>Telegram</h4>
                                <span>@jonassantos97</span>
                            </div>
                        </div>
                    </li>
                </ul>
            
            
        </aside>
    );
}   

export default SideBar;