import {FaLinkedinIn, FaGithub, FaInstagram} from "react-icons/fa";

import '../assets/styles/components/socialnetworks.scss';

function SocialNetwork(){

    const socialNetworks = [
        {name: "Linkedin", icon: <FaLinkedinIn/>, url:"https://www.linkedin.com/in/jonas-santos97/"},
        {name: "Github", icon: <FaGithub/>, url:"https://github.com/Jonas-sant"},
        {name: "Instagram", icon: <FaInstagram/>, url:"https://www.instagram.com/jonas.santos1997/"}
    ];

    return (
        <section id="social-network">
            {socialNetworks.map((network) => (
                <a href={network.url} target="blank" className="social-btn" id={network.name} key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
        );
};

export default SocialNetwork;