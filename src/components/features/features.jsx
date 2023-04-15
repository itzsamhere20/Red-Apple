import React from 'react'
import "../features/features.css"
import feature2 from "../assets/benifits.jpg"
import apple2 from "../assets/15.jpg"
import   {BsArrowRight}    from "react-icons/bs"
import { HashLink } from 'react-router-hash-link'
export default function Features() {
  return (
    <div className='components__container'>
        <div className='heading'>Features</div>
        <div className="feature__section">



            <div className='feature'>

            <div className="feature__heading">
              <h3> when Apple are in season </h3>    
                <HashLink smooth to="feature_1#apple_season"className="feature__button"><BsArrowRight title='Visit'/></HashLink>
            </div>
           
            </div>


            <div className='feature' style={{backgroundImage:`url(${feature2})`}}>
                
                <div className="feature__heading">
                  <h3> Benifits of Apple </h3>    
                  <HashLink smooth to="feature_2#benifits"className="feature__button"><BsArrowRight title='Visit'/></HashLink>
                </div>
               
                </div>

                <div className='feature' style={{backgroundImage:`url(${apple2})`}}>
                
                <div className="feature__heading">
                
                  <h3> Apple Diets </h3>    
                  <HashLink smooth to="feature_3#apple_diets"className="feature__button"><BsArrowRight title='Visit'/></HashLink>
                </div>
               
                </div>




        </div>
    </div>
  )
}
