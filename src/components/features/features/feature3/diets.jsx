import React,{useState } from 'react'
import "../feature3/diets.css"
import featureimg from "../../../assets/feature3.jpg"
import Navbar from '../../../navbar/navbar'

export default function Diets() {
  const [scrolled, setscrolled] = useState(false);
   const changeNavbar = () =>{
      if(window.scrollY >=100){
        setscrolled(true);
      }
      else{
        setscrolled(false);
      }
   };
   window.addEventListener('scroll', changeNavbar);
  return (
    <div  className='blogs__container' >
    <Navbar/>
    <div className="blog__heading__section">
        <img src={featureimg} alt=" red applpe with mesuring tape" className='blog__heading__img' />
           
              <div className="blog__metadata">
              <div className="blog__heading">
                Apple Diet
                </div>
    
            </div>
    </div>

    <div className="blog__paragraph__section"  style={{filter: scrolled? 'none': 'blur(3px)',transition:'0.3s all linear'}}  id="apple_diets">  
        <h1>
       5 Days Apple Diet Plan 
        </h1>
             <p>
             The apple diet is a 5-day apple weight loss diet and includes a meal plan that is 1200-calories per day or less.
             <br />
             <br />
             As you may have guessed from the name, this low-calorie menu includes plenty of whole apples.
             <br /><br />
             In fact, proponents of this diet claim that eating 5 apples a day will drive weight loss and improve health.
             <br /><br />
             While some meals on this diet contain only apples, other meals also offer lean proteins, whole grains, and veggies.
             <br />
             <br />
             <div className='diet__plan__container' >


              <div className="diet__boxes">
                <h2>Day 1</h2>
                <ul><b>Calories:</b> 600</ul>
                <ul><b>Breakfast:</b> 2 Apples</ul>
                <ul><b>Lunch:</b> 1 Apples</ul>
                <ul><b>Dinner:</b> 3 Apples</ul>
              </div>

              <div className="diet__boxes">
                <h2>Day 2</h2>
                <ul><b>Calories: </b>1150</ul>
                <ul><b>Breakfast: </b>1 apple, 1 glass of skim milk or unsweetened almond/ soy milk</ul>
                <ul><b>Snack: </b>1 cup of cottage cheese</ul>
                <ul><b>Lunch: </b>1 apple and avocado and green salad, topped with 3 ounces seeds and nuts. Dress it with apple cider vinegar and 1 tablespoon of olive oil. </ul>
                <ul><b>Dinner: </b> 2 Apples</ul>
              </div>

              <div className="diet__boxes">
                <h2>Day 3</h2>
                <ul><b>Calories: </b>1100</ul>
                <ul><b>Breakfast: </b>1 apple, two slices of whole-grain bread, and two slices turkey bacon</ul>
                <ul><b>Snack: </b>1 cup low-fat Greek yogurt</ul>
                <ul><b>Lunch: </b>1 apple and quinoa and carrot soup with 4 ounces chicken breast</ul>
                <ul><b>Dinner: </b> 2 Apples</ul>
              </div>

              <div className="diet__boxes">
                <h2>Day 4</h2>
                <ul><b>Calories: </b>1150</ul>
                <ul><b>Breakfast: </b>apple, a hard-boiled egg, and two slices of whole-grain bread</ul>
                <ul><b>Snack: </b>1 cup cottage cheese</ul>
                <ul><b>Lunch: </b>1 apple, 4 ounces skinless chicken breast, and raw vegetables with 1/2 cup watermelon</ul>
                <ul><b>Dinner: </b> 2 Apples</ul>
              </div>

              <div className="diet__boxes">
                <h2>Day 5</h2>
                <ul><b>Calories:</b> 1200</ul>
                <ul><b>Breakfast: </b> 1 green apple, a bowl of oatmeal, and 1/2 banana</ul>
                <ul><b>Snack: </b>1 cup cottage cheese and a grapefruit</ul>
                <ul><b>Lunch: </b> 1 apple, baked salmon, and a green salad dressed with apple cider vinegar and 1 tablespoon of olive oil</ul>
                <ul><b>Dinner: </b> 2 Apples</ul>
              </div>



             </div>



             </p>
             </div>
             </div>
  )
}
