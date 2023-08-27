import React, {useState} from 'react'
import "../blogs/blogs.css"
import Navbar from '../../navbar/navbar'
import blog__4 from "../../assets/blog4.jpg"

export default function Blog4() {
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

    
<div className='blogs__container' id='10_tips_for_vegan_baking'>
<Navbar />
        <div className="blog__heading__section">
            <img src={blog__4} alt=" seeds image" className='blog__heading__img' />
               
                  <div className="blog__metadata">
                  <div className="blog__heading">
                  10 Tips for Vegan Baking
                    </div>
                    <div className="date">
                     <div className="blog__writter"> Amanda Hernandez</div>
                     <div className="blog__date">14 - March - 2023</div>
                     </div>
                </div>
        </div>

        <div className="blog__paragraph__section" style={{filter: scrolled? 'none': 'blur(3px)',transition:'0.3s all linear'}}>  
            <h1>
            10 Tips for Vegan Baking
            </h1>
            <p>
            Many people are seeking out a plant-based/vegan/gluten free diet these days, and vegan baking can be done easily and deliciously with some simple tips!
            <br />
            <br />
            <h2>10 Vegan Baking Tips</h2>
            <br />
            <span>Swap regular butter for vegan butter</span>
            With the increase in vegan options, vegan butter can be used a substitute for real butter. Make sure to find a brand that works for you, and that might involve some test runs!
            <br />
            <br />
            <span>Use a “flax egg” instead of a real egg</span>
            Instead of using eggs in your baking recipes, a great vegan swap is to use a flax egg which is where you mix 1 tablespoon flax meal with 2.5 tablespoons of water, let it sit for a few minutes and then add to your recipe instead of an egg.
            <br />
            <br />
            
            <span>Plant-based yogurts work well</span>
            In a recipe that calls for yogurt (such as this one!), use a plant-based yogurt. This recipe works best with a plant-based Greek-style yogurt since it is thicker than traditional yogurt so that the dough isn’t too sticky.
            <br />
            <br />
            
            <span>Search for vegan baking recipes</span>
            When looking for a recipe, it is the easiest to search for one that is already vegan so you don’t have to figure out which ingredients to swap. Some fun options might include a Vegan Pear Tart or Chocolate Cherry Brownies that are gluten-free and vegan! All that searching might even inspire you to create your own vegan recipe!
            <br />
            <br />
            
            <span>Swap honey for maple syrup</span>
            Honey is not vegan and maple syrup is a great swap for it. You can opt for maple syrup in smoothies, baked goods, and even in appetizers!
            <br />
            <br />
            
            <span>Keep a well-stocked pantry</span>
            Keeping your pantry stocked with vegan baking ingredients makes it easy for when the desire to bake hits. Keep stock of flour, white sugar, brown sugar, flax meal, baking powder, baking soda, salt, cinnamon, vanilla extract, etc.
            <br />
            <br />
            
            <span>Play around with ingredients</span>
            If you try a recipe and the vegan swap doesn’t work out, don’t get discouraged. Just try a different recipe next time!
            <br />
            <br />
            
            <span>Use your favorite non-dairy milk</span>
            Many baking recipes call for milk and an easy swap is non-dairy milk.
            <br />
            <br />
            
            <span>Find a great vegan chocolate</span>
            Read the label when choosing your chocolate because many chocolates contain milk.
            <br />
            <br />
            <span>Flour is naturally vegan</span>
            Flours are naturally vegan so feel free to experiment with different flours like coconut flour, almond flour, or oat flour.
            <br />
            <br />
            Now that you’ve got some vegan-baking wisdom, let’s get to baking them bagels! Amanda Hernandez @minutritionist on Instagram has made us the most scrumptious Apple Cinnamon Crunch Bagels we’ve ever tasted! Follow along with her top tips for making these Homemade Vegan Bagels and enjoy!
            



          
           
            </p>

            </div>
        </div>
    
  )
}