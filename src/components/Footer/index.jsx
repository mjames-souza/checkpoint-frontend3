import './style.css'
import IconsList from './Icons-list/index';
import { FaDiscord, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer(){
    return (
        <footer className="footer bg-dark" id="contacts">
           <div class="footer-container">
            <h3 className="logo">James Souza</h3>
               <ul className="footer-medias">
                   <IconsList site="https://www.linkedin.com/in/m-james-souza" icon={<FaLinkedin/>}/>
                   <IconsList site="https://discord.com/channels/@me" icon={<FaDiscord/>} />
                   <IconsList site="https://github.com/mjames-souza/" icon={<FaGithub/>}/>
               </ul>
            </div>
            <div class="footer-bottom">
                <small>&copy;James Souza - Copyright 2022</small>
            </div>
      </footer>
    );

}