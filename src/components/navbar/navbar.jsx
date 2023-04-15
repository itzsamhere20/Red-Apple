import React,{useState} from 'react'
import "../navbar/navbar.css"
import logo from "../assets/logo4.png"
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

              <div className="nav__links__side">

                <ul>
                    <li><HashLink to="../#home"  smooth className='hashlink'>home</HashLink></li>
                    <li><HashLink to="../about"  smooth className='hashlink'>about us</HashLink></li>
                    <li><HashLink to="../recipes"  smooth className='hashlink'>recipes</HashLink></li>
                    <li><HashLink to="../#blogs"  smooth className='hashlink'>blogs</HashLink></li>
                </ul>

              </div>


    </div>
  )
}
