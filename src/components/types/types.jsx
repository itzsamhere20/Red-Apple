import React from 'react'
import "../types/types.css"
import type2 from "../assets/1.jpg"
import type3 from "../assets/2.jpg"
export default function Types() {
  return (
    <div className='components__container'>


        <div className="heading">Types</div>

        <div className="types__section">

            <div className="types__left__side">
<img src={type2} alt="green apple" className='green__apple__img' />
<img src={type3} alt="green apple" className='yellow__apple__img' />

            </div>

            <div className="types__right__side">
<p>There are more than 750 varieties of apples in the world, and more than 100 types of apples exist in the United States alone. And come fall, we're here for every single one of them.</p>
         <div className="types__button">Learn more</div>
            </div>


        </div>


        </div>
  )
}
