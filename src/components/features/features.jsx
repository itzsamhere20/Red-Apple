import React from 'react'
import "../features/features.css"
import apple from "../assets/10.jpg"
import apple2 from "../assets/14.jpg"
import   {BsArrowRight}    from "react-icons/bs"
export default function Features() {
  return (
    <div className='components__container'>
        <div className='heading'>Features</div>
        <div className="feature__section">



            <div className='feature'>

            <div className="feature__heading">
              <h3> when Apple are in season </h3>    
                <div className="feature__button"><BsArrowRight title='Visit'/></div>
            </div>
           
            </div>


            <div className='feature' style={{backgroundImage:`url(${apple})`}}>
                
                <div className="feature__heading">
                  <h3> Benifits of Apple </h3>    
                    <div className="feature__button"><BsArrowRight title='Visit'/></div>
                </div>
               
                </div>

                <div className='feature' style={{backgroundImage:`url(${apple2})`}}>
                
                <div className="feature__heading">
                
                  <h3> Apple Diets </h3>    
                    <div className="feature__button"><BsArrowRight title='Visit'/></div>
                </div>
               
                </div>




        </div>
    </div>
  )
}
