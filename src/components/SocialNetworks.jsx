import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import '../assets/styles/components/socialnetworks.scss';

function SocialNetwork(){

    const socialNetworks = [
        {name: "Linkedin", icon: <FaLinkedinIn/>},
        {name: "Github", icon: <FaGithub/>},
        {name: "Instagram", icon: <FaInstagram/>}
    ];

    return (
        <section id="social-network">
            {socialNetworks.map((network) => (
                <a href="#" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
        );
};

export default SocialNetwork;