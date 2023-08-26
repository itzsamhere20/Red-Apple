import React,{useState} from 'react'
import "../navbar/navbar.css"
import logo from "../assets/logo4.png"
import { FaHome } from "react-icons/fa"
import { TbNews} from "react-icons/tb"
import { MdSoupKitchen } from "react-icons/md"
import { GiBodyHeight } from"react-icons/gi"
import { HashLink, NavHashLink } from 'react-router-hash-link';


export default function Navbar() {
  const [scrolled, setscrolled] = useState(false);
  const changeNavbar = () =>{
     if(window.scrollY >= 100){
       setscrolled(true);
     }
     else{
       setscrolled(false);
     }
  };
  window.addEventListener('scroll', changeNavbar);
  return (

    //-------- Main Navbar Container -------- //
    
    <div className= {scrolled? 'nav__container2' : 'nav__container'}>
         
              
              {/* -------- Top logo Side -------- */}
              <div className="top__logo__container"  style={{bottom: scrolled? '88vh': '100vh',transition:'0.4s all linear'}}  >
                <img src={logo} alt="apple logo top" className='top__nav__logo' />
              </div>
{/* --------  Bottom  Nav-logo Side -------- */}


              <div className="nav__logo__side" >
           
           
                   <img src={logo} alt="apple logo bottom " className='nav__logo'  style={{marginTop: scrolled? '15vh': '0'}} />
              </div>

              {/* ------ nav link side ------ */}

              <div className="nav__links__side" style={{backgroundColor: scrolled? 'rgba(0, 0, 0, 0.5)': 'transparent', backdropFilter:  scrolled? 'blur(5px)' : 'none' }}>

                <ul>
                    <li><HashLink to="../#home"  smooth className='hashlink'><div className='nav__links'><FaHome /><span>home</span></div></HashLink></li>
                    <li><HashLink to="../#bmi"  smooth className='hashlink'><div className='nav__links'><GiBodyHeight /><span>bmi</span></div></HashLink></li>
                    <li><HashLink to="../recipes#apple_recipes"  smooth className='hashlink'><div className='nav__links'><MdSoupKitchen /><span>recipes</span></div></HashLink></li>
                    <li><HashLink to="../#blogs"  smooth className='hashlink'><div className='nav__links'><TbNews /><span>blog</span></div></HashLink></li>
                </ul>

              </div>
           



    </div>
  )
}
