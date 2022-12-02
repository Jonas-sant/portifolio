import SocialNetwork from './SocialNetworks';

import '../assets/styles/components/sidebar.scss';
import Avatar from '../assets/img/picture_profile.png';
import Gmail from '../assets/img/gmail.svg';
import Whatsapp from '../assets/img/whatsapp.svg';

function SideBar(){
    return(
        <aside id="sidebar">
            
            <img className="profilePicture" src={Avatar} alt="Jonas Santos" />
            <SocialNetwork />
            
                <ul>
                    <li>
                        <div className="itemList">
                        <img src={Gmail} width={40} height={40}/>
                            <div>
                                <h4>E-mail</h4>
                                <span>jonas.santos9708@gmail.com</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="itemList">
                            <img src={Whatsapp} width={50} height={50}/>
                            <div>
                                <h4>Whatsapp</h4>
                                <span>+55 19 993459829</span>
                            </div>
                        </div>
                    </li>

                    <li>
                        <div className="itemList">
                            <img />                        
                            <div>

                            </div>
                        </div>
                    </li>
                </ul>
            
            
        </aside>
    );
}   

export default SideBar;