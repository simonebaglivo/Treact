import React, { useEffect, useState } from 'react'
import './navbar.css'
import { Link } from "react-scroll";

export default function Navbar(){
    
    const logout = () =>{
        window.localStorage.removeItem('user');
        window.location.reload();
    }

    const [navBackground, setNavBackground] = useState('white');
    const [navColor, setNavColor] = useState('black');

    useEffect(() => {        
        document.addEventListener("scroll", () => {
            const backgroundcolor = window.scrollY < 100 ? "white" : "#333";
            const color = window.scrollY < 100 ? "black" : "white";
    
            setNavBackground(backgroundcolor);
            setNavColor(color);
        });
          
      });
    
    return(

        <div className="navbar d-flex" style={{backgroundColor:navBackground, color:navColor}}>
            <ul className="m-auto text-center">
                
                <Link activeClass="active" to="#home" spy={true}  smooth={true} offset={-100} duration= {100}>
                    Home
                </Link>
                <Link activeClass="active" to="#map" spy={true}  smooth={true} offset={-163} duration= {100}>
                    Map
                </Link>
                <Link activeClass="active" to="#about" spy={true}  smooth={true} offset={-203} duration= {100}>
                    About
                </Link>
                <Link activeClass="active" to="#daycard" spy={true}  smooth={true} offset={-217} duration= {100}>
                    Daycard
                </Link>
                <Link className="last" activeClass="active" to="#info" spy={true}  smooth={true} offset={-230} duration= {100}>
                    Info
                </Link>
                    
            </ul>
            <button onClick={logout} className="btn btn-primary">Logout</button>
        </div>
    )
}