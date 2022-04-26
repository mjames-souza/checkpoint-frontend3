import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import './style.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container">

    <a className="navbar-brand" href="#"><div className="logo">James Souza</div></a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FontAwesomeIcon icon={faBars}/>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#header">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#aboutme">Sobre Mim</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projetos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contacts">Contate-me</a>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}

export default Navbar