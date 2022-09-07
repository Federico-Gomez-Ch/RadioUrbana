import React from 'react';
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="Navbar">
            <div className='reproductor'>
        <audio controls autoPlay preload="none" src="http://201.251.11.7:8080/live"></audio>
        </div>

            <div className="logo">
                <img className='logoImg' src="images/LogoFM.png" alt='logo'/>
            </div>

            <div className='secciones'>
            <a href='./nosotros' className='navBtn'>NOSOTROS</a>
            <a href='./contacto' className='navBtn'>CONTACTO</a>
            </div>
        </nav>
    )
}

export default Navbar