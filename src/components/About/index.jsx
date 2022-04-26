import  pic  from '../../assets/img/JamesPerfil.png'
import React, { useEffect } from 'react';
import './style.css'
import "aos/dist/aos.css"
import Aos from "aos";

export default function Home(){
    
    useEffect(() => {
            Aos.init({ duration: 1500 }); 
    }, []);

    return(
        <div className="about-main" id="aboutme">
        <img className="about-pic" src={pic} alt="hacker boy"></img>
            <div className="text-area-about">
                <h1 data-aos="fade-down" className="about-text">Sobre mim</h1>
                <p data-aos="fade-down" className="description-text-about">Olá, meu nome é Maycon James, sou formado em Engenharia Mecânica e atualmente sou aluno do CTD da Digital House. Em meus projetos trabalho com HTML, CSS, Javascript e Java, também utilizo alguns frameworks de desenvolvimento: React, Bootstrap e Spring. Estou em busca de novos desafios no mundo da tecnologia</p>
            </div>
        </div>
    );
}