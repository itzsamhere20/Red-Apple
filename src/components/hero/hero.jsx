import "../hero/hero.css"
import { useState } from "react";
import {BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs"
import herovideo from "../assets/hero.mp4"
import { HashLink } from "react-router-hash-link";
export default function Hero() {
  
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
    <div className='components__container'>
        <video src={herovideo} loop autoPlay muted className="hero__video" />
       <div className="hero__writing__section">
        <div className="hero__heading">Refreshing + Delight</div>
        <p>Striving for the Freshest Flavors</p>
        <HashLink to='../feature_1#apple_varieties' className="hero__button" title="choose your favorite Apple">
        Which Apple is your Favorite?
        </HashLink>
       </div>


       <div className='hero__social__links' style={{flexDirection: scrolled? 'column-reverse' : 'row',right: scrolled? '-12.5%':'0',  bottom: scrolled? '40%':'0' }}>

               

                   <a href='https://www.faceboook.com/searchedforsameer' target='_blank'> <BsFacebook /></a>
                   <a href='https://www.instagram.com/i_am_sam_eer' target='_blank'> <BsInstagram /></a>
                   <a href='https://youtube.com/@ehsaanalistudio' target='_blank'>   <BsYoutube /></a>

            
                

              </div>
    </div>

  )
}
