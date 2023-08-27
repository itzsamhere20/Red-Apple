import React,{useState} from 'react'
import "../blogs/blogs.css"
import Navbar from '../../navbar/navbar'
import blog__3 from "../../assets/blog3.jpg"
import blog__3_1 from "../../assets/blog3.1.jpg"
import blog__3_2 from "../../assets/blog3.2.jpg"
import blog__3_3 from "../../assets/blog3.3.jpg"
export default function Blog3() {
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

    
<div className='blogs__container' id='making_non_alchoholic_apple_cider'>
<Navbar />
        <div className="blog__heading__section">
            <img src={blog__3} alt=" seeds image" className='blog__heading__img' />
               
                  <div className="blog__metadata">
                  <div className="blog__heading">
                  Making non Alchoholic Apple Cider
                    </div>
                    <div className="date">
                     <div className="blog__writter">The Green creator</div>
                     <div className="blog__date">14 - December - 2016</div>
                     </div>
                </div>
        </div>

        <div className="blog__paragraph__section" style={{filter: scrolled? 'none': 'blur(3px)',transition:'0.3s all linear'}}>  
            <h1>
            Making non Alchoholic Apple Cider
            </h1>
            <p>
            If you are looking for a warming and quick non-alcoholic apple cider recipe you will love this one. It is a semi warm drink using the blender.
            <br /><br />
            During the holiday season I’m curious about the fascinating recipes with and without alcohol. This one became a favorite this winter. It’s a delicious simple recipe and it is made in a blender. Everyone will love this as it is completely non-alcoholic. In case you’re still not convinced: this drink is full with fibers and that is great for the gut too.
            <br /><br />
            Unlike traditional apple cider recipes, I’m not even using my stove to heat this drink. I told you it’s quick. I simply blended it for several minutes to make it lukewarm. This winter drink is the perfect way to wind down and warm up.
            
            <br />
            <img src={blog__3_1} alt="" />
            <br />
            <h2>Why you will love this non-alcoholic apple cider ?</h2>
            <br />
            The first and most apparent reason is that it is simple to make and warmed with a blender. You don’t need a stovetop.
              <br />
              <br />
              This drink is irresistible with a good amount of apples and no additional nasty ingredients. This drink is much better than the store-bought ciders that are filtered, strained, pasteurized, and have added ingredients.
              <br /><br />
              The addition of cinnamon and a sweetener makes this drink not only warming and comforting but also gives it a hint of sweetness.
              <br />
              <img src={blog__3_2} alt="" />
              <br />
              <span>Description</span>
              <br />
              This warming and quick non-alcoholic apple cider recipe is comforting and easy to make. A great festive drink without alcohol.
              <br />
              <br />
              <h2>INGREDIENTS</h2>
              <br />
              <ul>

                <li>4 1/2 cup filtered water</li>
                <li>3 cup chopped organic apple, cored (about 3 large apples)</li>
                <li>2 tablespoon date syrup (or for non-vegans honey)</li>
                <li>1 teaspoon cinnamon</li>
                <li>optional: a splash of raw unpasteurized apple cider vinegar when serving</li>
                <li>optional: serve with 1 whole clove</li>

              </ul>
              <br />

              <h2>INSTRUCTIONS</h2>
              <br />
              <ul>

                <li>dd all ingredients to the container of your blender and secure lid. </li>
                <li>Blend on low speed and slowly increase to high speed, for about 6 minutes.</li>
                <li>Strain through a fine mesh sieve.</li>
                <li>Optionally serve with apple chunks.</li>
            

              </ul>
              <br />
              <span>NOTES</span>
              <br />
              <ol>
                <li>This drink can be kept in the fridge for up to a week.</li>
                <li>To serve this drink lukewarm, blend it for 5-10 minutes. A powerful blender will heat up your drink without a stove.</li>
                <li>You can omit the sweetener (date syrup) if you want to make an apple cider that is not too sweet.</li>
              </ol>
              <br />
              <img src={blog__3_3} alt="" />

      

            </p>

            </div>
        </div>
    
  )
}