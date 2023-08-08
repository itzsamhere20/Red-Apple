import React from 'react'
import "./recipe.css"
import Navbar from '../../navbar/navbar'
import recipe from "../../assets/recipe.jpg"
import recipe1 from "../../assets/recipe1.jpg"
import recipe2 from "../../assets/recipe2.jpg"
import recipe3 from "../../assets/recipe3.jpg"
import recipe4 from "../../assets/recipe4.jpg"
import recipe5 from "../../assets/recipe5.jpg"
import recipe6 from "../../assets/recipe6.jpg"
import recipe7 from "../../assets/recipe7.jpg"
import recipe8 from "../../assets/recipe8.jpg"
import recipe9 from "../../assets/recipe9.jpg"
import recipe10 from "../../assets/recipe10.jpg"
import recipe11 from "../../assets/recipe11.jpg"
import recipe12 from "../../assets/recipe12.jpg"
import recipe13 from "../../assets/recipe13.jpg"
import recipe14 from "../../assets/recipe14.jpg"
import recipe15 from "../../assets/recipe15.jpg"
import recipe16 from "../../assets/recipe16.jpg"
import recipe17 from "../../assets/recipe17.jpg"
import recipe18 from "../../assets/recipe18.jpg"

export default function Recipe() {
  return (
    <div  className='blogs__container' id="recipes">
    <Navbar/>
    <div className="blog__heading__section">
        <img src={recipe} alt=" red apple in bag " className='blog__heading__img' />
           
              <div className="blog__metadata">
              <div className="blog__heading">
                Apple Recipes
                </div>
    
            </div>
    </div>

    <div className="blog__paragraph__section" >  

    {/* -----------------------------1st recipe----------------------*/ }
        
             <p id='apple_hand_pies'>

                 <h1>Apple Hand Pies</h1>

                <div className="cooking__time__container">

                    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>6</div></div>
                    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>20 mins</div></div>
                    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>4 hrs 30 mins</div></div>

                </div>

                <h2>Ingredients</h2>
                <br />
                <span>CRUST</span>
                <br />
                <ul>
                    <li>3 c. (360 g.) all-purpose flour, plus more for rolling</li>
                    <li>3 tbsp. granulated sugar</li>
                    <li>1/2 tsp. kosher salt</li>
                    <li>1 c. (2 sticks) cold butter, cut into 1/2" pieces</li>
                    <li>1 tbsp. apple cider vinegar</li>
                    <li>8 tbsp. ice water</li>

                </ul>
                <br />
                <br />
                <span>FILLING</span>
                <br />
                <ul>
                    <li>1 tbsp. butter</li>
                    <li>3 large tart apples (about 1 3/4 lb.; such as Granny Smith), cored, peeled, and cut into 1/2" pieces (about 4 1/2 c.)</li>
                    <li>1/3 c. granulated sugar</li>
                    <li>1/4 c. apple butter</li>
                    <li>1 tsp. pure vanilla extract</li>
                    <li>1/8 tsp. kosher salt</li>
                    <li>2 tbsp. fresh lemon juice</li>
                    <li>1 tbsp. cornstarch or 2 tbsp. all-purpose flour</li>
            
                </ul>
                <br />
                <br />
                <span>ASSEMBLY</span>
                <br />
                <ul>
                    <li>1 large egg</li>
                    <li>1 tbsp. water</li>
                    <li>Pinch of kosher salt</li>
                    <li>All-purpose flour, for rolling</li>
                    <li>Turbinado sugar, for sprinkling</li>
                    <li>Vanilla ice cream, for serving (optional)</li>
                </ul>
                <br />
                <br />
                <h2>Directions</h2>
                <br />
                <span>CRUST</span>
                <br />
                <ul>


                    <li>
                        <b>Step 1</b>
                    <br />
                    In a large bowl, whisk flour, granulated sugar, and salt. (Alternatively, you can use a food processor.) Add butter and, using your hands, mix until walnut-sized pieces form. Add vinegar, then ice water, 1 tablespoon at a time, and mix until dough starts to come together and is slightly crumbly and moist, but not wet and sticky (test by squeezing some with your fingers). 
                    
                    </li>


                    <li>
                        <b>Step 2</b>
                    <br />
                    Turn out dough onto a lightly floured work surface. Divide into 2 balls. Flatten into disks (making sure there are no/minimal cracks). Cover with plastic wrap and refrigerate until dough is very cold, at least 2 hours or up to overnight.
                    </li>


                </ul>


                <br />
                <span>FILLING</span>
                <br />
                <ul>


                    <li>
                        <b>Step 1</b>
                    <br />
                    In a large skillet over medium heat, melt butter. Cook apples, granulated sugar, apple butter, vanilla, and salt, stirring occasionally, until apples begin to soften, 4 to 5 minutes. 
                    
                    </li>


                    <li>
                        <b>Step 2</b>
                    <br />
                    In a small bowl, whisk lemon juice into cornstarch, then add to skillet and stir to combine. Bring to a simmer and cook, stirring occasionally, until mixture slightly thickens, about 1 minute. Transfer to a large bowl; cover and refrigerate until cold, at least 30 minutes or up to overnight.
                    </li>


                </ul>



                <br />
                <span>ASSEMBLY</span>
                <br />
                <ul>


                    <li>
                        <b>Step 1</b>
                    <br />
                    Preheat oven to 400°. Let dough sit at room temperature 5 to 10 minutes. Line a large baking sheet with parchment paper. In a small bowl, whisk egg, water, and salt until combined.
                    
                    </li>


                    <li>
                        <b>Step 2</b>
                    <br />
                    On a lightly floured work surface, roll each disk to a 16" round. Using a 6" round cookie cutter (or a bowl 6" in diameter), cut out 3 circles from each round.
                    </li>


                    <li>
                        <b>Step 3</b>
                    <br />
                    Spoon about 1/3 cup filling onto each round, leaving a 1" border. Brush edges of dough with egg wash, then fold dough in half over filling. Seal edges with tines of a fork. Arrange on prepared sheet. 
                    </li>


                    <li>
                        <b>Step 4</b>
                    <br />
                    Brush tops of pies with egg wash, then cut a few slits in top of each; generously sprinkle with turbinado sugar. Freeze 20 minutes.
                    </li>


                    <li>
                        <b>Step 5</b>
                    <br />
                    Bake pies until crust is golden and filling is bubbling, 30 to 35 minutes. Let cool about 15 minutes. Serve with ice cream, if using.
                    </li>


                </ul>
               <br />
                <img src={recipe1} alt="" className='apple__recipes__imgs' />
             
                <div className='bottom__line'></div>
               
             </p>
          





{/* -----------------------------2nd recipe----------------------*/ }

        

             
             <p id='sheet_pan_pork_chops_with_apples'>

                 <h1>Sheet-Pan Pork Chops With Apples</h1>

                <div className="cooking__time__container">

                    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>4</div></div>
                    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>10 mins</div></div>
                    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>35 mins</div></div>

                </div>

                <h2>Ingredients</h2>
                <br />
                <ul>
                    <li>1/4 c. extra-virgin olive oil</li>
                    <li>1 1/2 tbsp. balsamic vinegar</li>
                    <li>2 tsp. maple syrup</li>
                    <li>2 tsp. whole-grain mustard</li>
                    <li>Kosher salt</li>
                    <li>Freshly ground black pepper</li>
                    <li>1 medium red onion, halved and sliced in ¼"-thick wedges</li>
                    <li>2 sweet-tart apples (such as Honeycrisp or Pink Lady), cored and cut into 8 wedges each</li>
                    <li>4 (1"-thick) boneless pork chops (about 1½ lb. total)</li>
                    <li>4 sprigs fresh rosemary</li>
                </ul>

                <br />
                <h2>Directions</h2>
                <br />
                <ul>


                    <li>
                        <b>Step 1</b>
                    <br />
                    Preheat oven to 425° and place racks in the center and upper third of the oven. In a small bowl, whisk olive oil, balsamic, maple syrup, mustard, and ¼ teaspoon each salt and pepper.  
                    
                    </li>


                    <li>
                        <b>Step 2</b>
                    <br />
                    Add onion and apple to a rimmed baking sheet. Drizzle with half of the balsamic mixture and toss to combine. Season with ¼ teaspoon each salt and pepper.
                    </li>


                    <li>
                        <b>Step 3</b>
                    <br />
                    Season the pork chops on both sides with 1 teaspoon salt and ¼ teaspoon pepper. Nestle the pork chops among the onions and apples. Brush the remaining half of the balsamic mixture on both sides of each chop. Top each chop with a rosemary sprig. Place in the center rack of the oven and bake until apples and onions are softened, about 15 minutes.
                    </li>


                    <li>
                        <b>Step 4</b>
                    <br />
                    Increase oven temperature to a high broil. Discard rosemary and place the sheet pan on the rack in the upper third of your oven and broil until chops are slightly caramelized, 3 to 5 minutes, depending on the strength of your broiler. Let pork rest at least 5 minutes before slicing. Serve pork with apples and onions with any pan juices spooned over top.
                    </li>


                </ul>

               <br />
                <img src={recipe2} alt="" className='apple__recipes__imgs' />
             
                <div className='bottom__line'></div>
               
             </p>





             


{/* -----------------------------3rd recipe----------------------*/ }

        

             
<p id='classic_apple_pie'>

<h1 >Classic Apple Pie</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>8 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>45 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>4 hrs 45 mins</div></div>

</div>
<h2>Ingredients</h2>
                <br />
                <span>CRUST</span>
                <br />
                <ul>
                    <li>3 c. (360 g.) all-purpose flour, plus more for rolling</li>
                    <li>1 c. (2 sticks) unsalted butter, cut into 1/2" pieces</li>
                    <li>1/2 tsp. kosher salt</li>
                    <li>2 tbsp. granulated sugar</li>
                    <li>1 tbsp. apple cider vinegar</li>
                    <li>8 tbsp. ice water</li>

                </ul>
                <br />
                <br />
                <span>FILLING</span>
                <br />
                <ul>
                    <li>3 1/2 lb. assorted apples (such Granny Smith, Honeycrisp, and/or Gala), cored, peeled, thinly sliced</li>
                    <li>2/3 c. granulated sugar</li>
                    <li>2 tbsp. all-purpose flour</li>
                    <li>1/2 tbsp. pure vanilla extract</li>
                    <li>1/4 tbsp. kosher salt</li>
                    <li>2 tbsp. fresh lemon juice</li>
                    <li>1 tbsp. ground cinnamon</li>
                    <li>tbsp. unsalted butter, cut into small pieces</li>
            
                </ul>
                <br />
                <br />
                <span>ASSEMBLY</span>
                <br />
                <ul>
                    <li>1 large egg</li>
                    <li>1 tbsp. water</li>
                    <li>Coarse sugar, for sprinkling</li>
                    <li>All-purpose flour, for rolling</li>
                    
                </ul>
                <br />
                <br />
                <h2>Directions</h2>
                <br />
                <span>CRUST</span>
                <br />
                <ul>


                    <li>
                        <b>Step 1</b>
                    <br />
                    In separate containers, freeze flour and butter until cold, about 30 minutes
                    
                    </li>


                    <li>
                        <b>Step 2</b>
                    <br />
                    In a large food processor, pulse flour, granulated sugar, and salt until combined. Add butter and pulse until pea-sized and some slightly larger pieces form. With the motor running, stream in vinegar, then ice water, 1 tablespoon at a time, until dough starts to come together and is moist but not wet and sticky (test by squeezing with your fingers). Mixture will be crumbly.
                    </li>


                    <li>
                        <b>Step 3</b>
                    <br />
                    Turn out dough onto a lightly floured surface. Divide into 2 pieces, then flatten to disks (making sure there are no/minimal cracks).
                    </li>


                    <li>
                        <b>Step 4</b>
                    <br />
                    Cover with plastic wrap and refrigerate until dough is very cold, at least 2 hours or up to overnight.
                    </li>


                    <li>
                        <b>Step 5</b>
                    <br />
                    On a lightly floured surface, roll 1 piece into a 12" circle. Carefully wrap dough around rolling pin and unfurl into a 9" pie dish. Lift edges and allow dough to slump down into dish (don’t stretch). Refrigerate 30 minutes or freeze 10 minutes.
                    </li>


                </ul>


                <br />
                <span>FILLING</span>
                <br />
                <ul>


                    <li>
                        <b>Step 1</b>
                    <br />
                    In a large bowl, toss apples, granulated sugar, flour, lemon juice, cinnamon, vanilla, and salt until well combined.
                    
                    </li>


                    <li>
                        <b>Step 2</b>
                    <br />
                    Transfer apple mixture to prepared pie dish. Dot all over with butter.
                    </li>


                </ul>



                <br />
                <span>ASSEMBLY</span>
                <br />
                <ul>


                    <li>
                        <b>Step 1</b>
                    <br />
                    Place a rack in center of oven; preheat to 425º. Place a large baking sheet on rack to preheat.
                    
                    </li>


                    <li>
                        <b>Step 2</b>
                    <br />
                    On a lightly floured surface, roll out second disc of dough into a 12" circle and drape over apple filling. Trim overhang to an even 1". Fold overhang up and over itself and crimp edges. 
                    </li>


                    <li>
                        <b>Step 3</b>
                    <br />
                    In a small bowl, mix egg with water. Brush dough with egg wash. Cut 5 to 6 small slits in the center. Sprinkle with coarse sugar.
                    </li>


                    <li>
                        <b>Step 4</b>
                    <br />
                    Place pie dish on preheated sheet and bake 20 minutes. Reduce oven temperature to 375º and continue to bake, covering with foil if edges look dark, until crust is golden brown and filling is bubbly, about 40 minutes more.
                    </li>


                    <li>
                        <b>Step 5</b>
                    <br />
                    Transfer pie dish to a wire rack. Let cool at least 2 hours before serving.
                    </li>


               <br />
                <img src={recipe3} alt="" className='apple__recipes__imgs' />
             </ul>
                <div className='bottom__line'></div>
               
             </p>





             


{/* -----------------------------4th recipe----------------------*/ }

        

             
<p id='baked_apple_oatmeal'>

<h1 >Baked Apple Oatmeal</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>8 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>15 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>1 hr 20 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>4 tbsp. (1/2 stick) butter, melted, plus more, softened, for pan</li>
    <li>3 c. rolled oats (about 12 oz.)</li>
    <li>1 tsp. baking powder</li>
    <li>1/2 tsp. ground cinnamon, plus more for sprinkling</li>
    <li>1/2 tsp. kosher salt</li>
    <li>1/8 tsp. freshly grated nutmeg</li>
    <li>2 large eggs</li>
    <li>3 1/2 c. whole milk</li>
    <li>1/4 c. honey, plus more for drizzling</li>
    <li>1 tsp. pure vanilla extract</li>
    <li>2 small tart apples (about 12 oz.; such as Granny Smith), cored, peeled, and chopped (about 1 3/4 c.)</li>
    <li>11/2 c. chopped walnuts</li>
    <li>Plain yogurt, for serving</li>
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Preheat oven to 350°. Grease a 13"-by-9" or 3-qt. baking dish with softened butter.
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    In a large bowl, whisk oats, baking powder, cinnamon, salt, and nutmeg.
    </li>


    <li>
        <b>Step 3</b>
    <br />
    In a medium bowl, whisk eggs, milk, honey, vanilla, and melted butter. Add to dry ingredients and mix until just combined. Stir in apples and walnuts. Transfer mixture to prepared dish.
    </li>


    <li>
        <b>Step 4</b>
    <br />
    Bake until oatmeal is just set and golden brown and apples are tender, 40 to 45 minutes. Let cool about 20 minutes. Serve warm with yogurt; drizzle with honey and sprinkle with cinnamon.
    </li>


</ul>

<br />
                <img src={recipe4} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>








{/* -----------------------------5th recipe----------------------*/ }





        

             
<p id='pork_chops_with_apples'>

<h1 >Pork Chops With Apples</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>4 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>10 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>30 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>Pork Chops with Apples</li>
    <li>1 tsp. smoked paprika</li>
    <li>Kosher salt</li>
    <li>Freshly ground black pepper</li>
    <li>2 tbsp. extra-virgin olive oil</li>
    <li>1 apple, cored and thinly sliced</li>
    <li>1 small onion, halved and thinly sliced</li>
    <li>2 cloves garlic, minced</li>
    <li>2 tsp. chopped fresh rosemary</li>
    <li>2 tsp. fresh thyme leaves</li>
    <li>1 c. apple cider</li>
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Season pork chops all over with paprika, salt, and pepper. 
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    In a large skillet, heat oil over medium heat. Add pork chops and cook, turning halfway through, until golden, about 3 minutes per side. Transfer to a plate.
    </li>


    <li>
        <b>Step 3</b>
    <br />
    To the same skillet, add apple, onion, and garlic and cook until apples and onion are browned and slightly softened, about 8 minutes. Add herbs, and apple cider and bring to a simmer. Return pork chops to skillet and simmer until cider is almost completely reduced and a thermometer inserted in the thickest part of the chops registers 145°, 6 to 8 more minutes.
    </li>



</ul>

<br />
                <img src={recipe5} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>










{/* -----------------------------6th recipe----------------------*/ }





        

             
<p id='apple_galette'>

<h1 >Apple Galette</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>8 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>15 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>1 hr 15 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>1 basic pie dough</li>
    <li>3 apples, cored and sliced</li>
    <li>3 tbsp. packed brown sugar</li>
    <li>Juice of 1/2 lemon</li>
    <li>1 tsp. ground cinnamon </li>
    <li>Pinch kosher salt</li>
    <li>1 large egg, lightly beaten with 1 tsp water </li>
    <li>1 tbsp. demerara sugar</li>
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Make basic pie dough, and let chill 2 hours. 
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    Meanwhile, prep your fruit filling: Combine sliced apples, brown sugar, lemon juice, cinnamon, and a pinch of salt in a large bowl. Gently fold to coat apples.
    </li>


    <li>
        <b>Step 3</b>
    <br />
    Preheat oven to 400° and line a medium baking sheet with parchment paper. On a lightly floured surface roll dough into a 12" circle about 1/8" thick. Transfer to prepared baking sheet.
    </li>


    
    <li>
        <b>Step 4</b>
    <br />
    Arrange apple slices on top of dough, leaving a 1 1/2" border around the edge. Fold the edge nearest to you towards the center. Rotate sheet plan slightly and repeat, until all edges are folded towards fruit.
    </li>


    
    <li>
        <b>Step 5</b>
    <br />
    Brush egg wash over crust and sprinkle with demerara sugar. Bake until crust is golden and fruit is tender, 40 to 45 minutes. Transfer to cooling rack and let cool completely before slicing.
    </li>



</ul>

<br />
                <img src={recipe6} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>











{/* -----------------------------7th recipe----------------------*/ }





        

             
<p id='caramel_apples'>

<h1 >Caramel Apples</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>5 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>20 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>45 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>Candies</li>
    <li>Apples</li>
    <li>Peanut crust</li>
    <li>wooden pointed sticks</li>
   
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Unwrap your candies. 
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    Melt your candies.
    </li>


    <li>
        <b>Step 3</b>
    <br />
   Pu wooden sticks into the apple
    </li>


    
    <li>
        <b>Step 4</b>
    <br />
    Get dippin' into the melted candies
    </li>


    
    <li>
        <b>Step 5</b>
    <br />
    Coat 'em in the peanut crust
    </li>




    <li>
        <b>Step 6</b>
    <br />
    Refrigerate.
    </li>



    <li>
        <b>Step 7</b>
    <br />
    warm up a bit.
    </li>



</ul>

<br />
                <img src={recipe7} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>












{/* -----------------------------8th recipe----------------------*/ }





        

             
<p id='chicken_salad_sandwich'>

<h1 >Chicken Salad Sandwich</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>4 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>15 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>25 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>3 boneless skinless chicken breasts</li>
    <li>6 slices lemon</li>
    <li>1 green apple, chopped</li>
    <li>1/2 red onion, finely chopped</li>
    <li>2 celery stalks, finely chopped </li>
    <li>2/3 c. mayonnaise</li>
    <li>1/4 c. Dijon mustard </li>
    <li>Kosher salt</li>
    <li>Freshly ground black pepper</li>
    <li>Baguette, for serving </li>
    <li>2 tbsp. vinegar </li>
    <li>Butter lettuce, for serving</li>
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    In a large pot, arrange the chicken in a single layer. Place lemon slices and dill sprigs on chicken and pour water over it, covering by at least an inch. Bring water to a boil, then reduce heat and simmer until cooked through, 10 minutes. Let rest 10 minutes, then slice into 1" pieces.
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    In a large bowl, combine chicken, apple, onion, and celery.
    </li>


    <li>
        <b>Step 3</b>
    <br />
    In a medium bowl, whisk together mayonnaise, Dijon, and vinegar and season with salt and pepper.
    </li>


    
    <li>
        <b>Step 4</b>
    <br />
    Pour dressing over chicken mixture and toss.
    </li>


    
    <li>
        <b>Step 5</b>
    <br />
    Garnish with chopped dill and serve on a baguette with lettuce.
    </li>



</ul>

<br />
                <img src={recipe8} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>












{/* -----------------------------9th recipe----------------------*/ }





        

             
<p id='apple__cookies'>

<h1 >Apple Cookies</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>20</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>20 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>1 hr 40 mins</div></div>

</div>
<h2>Ingredients</h2>
                <br />
                <span>COOKIE DOUGH</span>
                <br />
                <ul>
                    <li>1 1/2 c. (180 g.) all-purpose flour</li>
                    <li>1 tsp. apple pie spice</li>
                    <li>3/4 tsp. baking soda</li>
                    <li>1/2 tsp. kosher salt</li>
                    <li>6 tbsp. (3/4 stick) butter, softened</li>
                    <li>1/2 c. (100 g.) granulated sugar</li>
                    <li>1/2 c. (107 g.) packed light brown sugar</li>
                    <li>1 large egg</li>
                    <li>1/2 tsp. pure vanilla extract</li>
                    <li>1 medium tart apple (about 8 oz.; such as Granny Smith), cored, peeled, and grated (about 1 c.)</li>

                </ul>
                <br />
                <br />
                <span>ICING</span>
                <br />
                <ul>
                    <li>3/4 c. powdered sugar</li>
                    <li>4 tsp. fresh lemon juice</li>
                    <li>Pinch of apple pie spice</li>
                   
                </ul>
                <br />
               
                
            
                <h2>Directions</h2>
                <br />
                <span>COOKIE DOUGH</span>
                <br />
                <ul>


                    <li>
                        <b>Step 1</b>
                    <br />
                    Preheat oven to 350°. Line 2 large baking sheets with parchment paper.
                    
                    </li>


                    <li>
                        <b>Step 2</b>
                    <br />
                    In a medium bowl, whisk flour, apple pie spice, baking soda, and salt.
                    </li>


                    <li>
                        <b>Step 3</b>
                    <br />
                    In the bowl of a stand mixer fitted with the whisk attachment, beat butter, granulated sugar, and brown sugar on medium speed until light and fluffy, about 2 minutes. Add egg and mix until incorporated, then mix in vanilla. Add dry ingredients to butter mixture and beat until well combined. Stir in apples until just combined. Cover and chill dough until cold, about 30 minutes.
                    </li>


                    <li>
                        <b>Step 4</b>
                    <br />
                    Scoop 2-tablespoon balls of dough (about 20 balls) and arrange 2" apart on prepared sheets. Bake until cookies are just set and light golden brown, 14 to 18 minutes. Let cool completely. 
                    </li>




                </ul>


                <br />
                <span>ICING</span>
                <br />
                <ul>


                    <li>
                        <b>Step 1</b>
                    <br />
                    In a small bowl, whisk powdered sugar and lemon juice. Add water, 1 teaspoon at a time, until icing is thick but pourable.
                    
                    </li>


                    <li>
                        <b>Step 2</b>
                    <br />
                    Spoon icing over cooled cookies. Let stand until icing sets, about 15 minutes.
                    </li>


                    <li>
                        <b>Step 3</b>
                    <br />
                    Make Ahead: Cookies can be made 2 days ahead. Store in an airtight container at room temperature.
                    </li>


                </ul>
                <br />
                <br />




               <br />
                <img src={recipe9} alt="" className='apple__recipes__imgs' />
             
                <div className='bottom__line'></div>
               
             </p>










{/* -----------------------------10th recipe----------------------*/ }





        

             
<p id='caramel_apple_tart'>

<h1 >Caramel Apple Tart</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>9 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>20 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>45 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>2 apples, cored and thinly sliced </li>
    <li>2 tbsp. caramel sauce, warmed, plus more for serving</li>
    <li>1/2 tsp. ground cinnamon</li>
    <li>1 sheet frozen puff pastry, thawed according to package directions</li>
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Preheat oven to 400°F. Toss apples with caramel and cinnamon.
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    Arrange on puff pastry. 
    </li>


    <li>
        <b>Step 3</b>
    <br />
    Bake until pastry is golden, about 30 minutes.
    </li>


    
    <li>
        <b>Step 4</b>
    <br />
    Bake until pastry is golden, about 30 minutes.
    </li>


    
    <li>
        <b>Step 5</b>
    <br />
    Let cool 10 minutes before cutting into squares.
    </li>



</ul>

<br />
                <img src={recipe10} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>











{/* -----------------------------11th recipe----------------------*/ }





        

             
<p id='apple_coffee_cake'>

<h1 >Apple Coffee Cake</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>12 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>15 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>1 hr 30 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>Cooking spray </li>
    <li>2 1/2 c. all-purpose flour</li>
    <li>1 tsp. cinnamon</li>
    <li>1 tsp. kosher salt</li>
    <li>1 tsp. baking powder </li>
    <li>1/2 tsp. baking soda</li>
    <li>1 c. (2 sticks) unsalted butter, softened</li>
    <li>3/4 c. packed brown sugar</li>
    <li>3/4 c. granulated sugar</li>
    <li>2 large eggs</li>
    <li>1 tsp. pure vanilla extract</li>
    <li>1 c. sour cream</li>
    <li>2 medium sweet-tart apples (such as Granny Smith or Honeycrisp), peeled, cored, and chopped</li>
    <li>12 tbsp. unsalted butter, melted and cooled slightly</li>
    <li>1 1/2 c. all-purpose flour</li>
    <li>3/4 c. packed brown sugar</li>
    <li>1 tsp. cinnamon</li>
    <li>Pinch kosher salt</li>
    <li>Powdered sugar, for topping (optional)</li>
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Preheat oven to 350° with a rack in the middle position; lightly coat a 9”-x-13” baking pan with cooking spray. In a medium bowl, whisk together flour, cinnamon, salt, baking powder, and baking soda. 
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    In a large bowl using a hand mixer or in the bowl of a stand mixer fitted with the paddle attachment, beat butter and sugars together on medium speed until creamy. Add eggs, one at a time, beating well after each addition. Add vanilla and beat to combine. Scrape down sides of the bowl to make sure all is evenly incorporated. Add dry ingredients and beat on low speed until just a few dry streaks remain. Add sour cream and beat until just combined. Fold in apples. Transfer batter to prepared pan and smooth top with a spatula. 
    </li>


    <li>
        <b>Step 3</b>
    <br />
    In a medium bowl, combine melted butter, flour, sugar, cinnamon, and a pinch of salt. Sprinkle crumbs over top of the batter. 
    </li>


    
    <li>
        <b>Step 4</b>
    <br />
    Bake until golden and a toothpick inserted in the middle of the cake comes out clean, 50 to 60 minutes. Let cool completely.
    </li>


    
    <li>
        <b>Step 5</b>
    <br />
    Top with powdered sugar, if desired.
    </li>



</ul>

<br />
                <img src={recipe11} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>













{/* -----------------------------12th recipe----------------------*/ }





        

             
<p id='apple_pie_bars'>

<h1 >Apple Pie Bars</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>18 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>30 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>2 hrs 15 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>Cooking spray</li>
    <li>1 c. (2 sticks) butter, softened</li>
    <li>1/2 c. granulated sugar</li>
    <li>1/4 c. packed brown sugar </li>
    <li>2 1/2 c. all-purpose flour</li>
    <li>1/2 tsp. kosher salt </li>
    <li>6 apples, peeled, cored, and sliced </li>
    <li>Juice of 1/2 lemon</li>
    <li>1/2 c. packed brown sugar </li>
    <li>1 tsp. ground cinnamon</li>
    <li>1 tsp. pure vanilla extract</li>
    <li>1 1/2 c. all-purpose flour</li>
    <li>1 c. chopped pecans</li>
    <li>1 c. packed brown sugar </li>
    <li>3/4 c. (1 1/2 sticks) butter, melted
Caramel, for serving</li>
 


    
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Preheat oven to 350° and line a 9”-x-13” pan with parchment then grease with cooking spray. In a large bowl using a hand mixer, beat butter and sugars together until light and fluffy. Add flour and salt and mix until just combined. 
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    Press into prepared pan about 1/2” up sides. Bake until lightly golden, 20 minutes. 
    </li>


    <li>
        <b>Step 3</b>
    <br />
    In a large bowl, toss apples, lemon juice, brown sugar, cinnamon, vanilla, and salt together. Spread apples over crust. 
    </li>


    
    <li>
        <b>Step 4</b>
    <br />
    In a medium bowl, whisk together flour, pecans, brown sugar, and salt. Stir in melted butter until coarse clumps form.
    </li>


    
    <li>
        <b>Step 5</b>
    <br />
    Sprinkle crumb topping over apples and bake until top is golden and apples are soft, about 1 hour. 
    </li>



    <li>
        <b>Step 6</b>
    <br />
    Let cool at least 15 minutes then slice into squares and drizzle with caramel before serving.
    </li>




</ul>

<br />
                <img src={recipe12} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>













{/* -----------------------------13th recipe----------------------*/ }





        

             
<p id='apple_crisp'>

<h1 >Apple Crisp</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>6 - 8 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>15 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>1 hrs 30 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>5 Honeycrisp, Granny Smith, and/or Cripp’s Pink apples, peeled, cored, sliced ¼” to ½” thick</li>
    <li>2 tbsp. cornstarch</li>
    <li>2 tbsp. fresh lemon juice </li>
    <li>2 tbsp. granulated sugar </li>
    <li>2 tsp. ground cinnamon, divided</li>
    <li>1/4 tsp. ground nutmeg</li>
    <li>1 1/2 c. (135 g.) rolled oats </li>
    <li>3/4 c. (160 g.) packed light brown sugar </li>
    <li>2/3 c. (80 g.) all-purpose flour </li>
    <li>1/4 tsp. kosher salt</li>
    <li>3/4 c. (1 1/2 sticks) unsalted butter, melted</li>
    <li>Vanilla ice cream, for serving (optional)</li>
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Preheat oven to 350°. In a medium bowl, toss apples, cornstarch, lemon juice, granulated sugar, 1 teaspoon cinnamon, and nutmeg. 
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    In a small bowl, toss oats, brown sugar, flour, salt, and remaining 1 teaspoon cinnamon. Add butter and stir until a crumbly mixture forms resembling wet sand.
    </li>


    <li>
        <b>Step 3</b>
    <br />
    Arrange apple mixture in a 2-quart ceramic baking dish. Top evenly with the oat mixture.
    </li>


    
    <li>
        <b>Step 4</b>
    <br />
    Bake until apples are soft, topping is crisp and golden brown, and juices are bubbling around the edges of the dish, 55 to 70 minutes. Serve warm with ice cream, if desired.
    </li>




</ul>

<br />
                <img src={recipe13} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>














{/* -----------------------------14th recipe----------------------*/ }





        

             
<p id='farro_salad'>

<h1 >Farro Salad</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>4 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>10 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>1 hr 10 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>1 c. whole-grain farro</li>
    <li>2 c. low-sodium vegetable broth</li>
    <li>1 1/2 tsp. kosher salt</li>
    <li>1 bay leaf</li>
    <li>1 Large shallot, very thinly sliced</li>
    <li>1/3 c. extra virgin olive oil</li>
    <li>3 tbsp. apple cider vinegar</li>
    <li>1 tbsp. dijon mustard</li>
    <li>2 tsp. honey</li>
    <li>Freshly ground black pepper</li>
    <li>2 c. lightly packed arugula</li>
    <li>1 Green apple, chopped</li>
    <li>1/2 c. shaved Parmesan</li>
    <li>1/4 c. freshly chopped basil</li>
    <li>2 tbsp. freshly chopped parsley</li>
    <li>1/4 c. toasted pecans, roughly chopped</li>
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    In a medium saucepan, combine farro, vegetable broth, salt, and bay leaf. Bring to a boil, then reduce to a simmer and let cook, stirring occasionally, until farro is tender and no broth remains, about 30 minutes. When farro is cooked, transfer to a large bowl to cool.
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    In the meantime, make fried shallots: in a small saucepan over medium heat, combine oil and shallots. When the shallots begin to bubble, reduce heat to medium-low and cook, stirring occasionally, until shallots are golden and crisp, 15 to 20 minutes. Remove shallots from oil with a slotted spoon and place on a paper-towel lined plate and season with salt. Let oil cool.
    </li>


    <li>
        <b>Step 3</b>
    <br />
    Make dressing: in a medium bowl, combine the cooled olive oil with vinegar, mustard, and honey and season with salt and pepper.
    </li>


    
    <li>
        <b>Step 4</b>
    <br />
    Assemble salad: combine cooked farro, crispy shallots, arugula, apple, parmesan, basil, parsley, and pecans. Drizzle dressing over salad and toss to coat.
    </li>



</ul>

<br />
                <img src={recipe14} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>












{/* -----------------------------15th recipe----------------------*/ }




        

             
<p id="mcDonald's_apple_pie">

<h1 >McDonald's Apple Pie</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>4 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>15 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>1 hr</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>2 tbsp. butter</li>
    <li>2 apples, peeled, cored, and chopped</li>
    <li>1/4 c. packed brown sugar</li>
    <li>1 tsp. cinnamon</li>
    <li>1/4 tsp. kosher salt</li>
    <li>Juice of ½ lemon</li>
    <li>All-purpose flour, for surface</li>
    <li>1 sheet puff pastry, thawed</li>
    <li>1 egg, lightly beaten</li>
    <li>Cinnamon sugar </li>
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Preheat oven to 400° and line a large baking sheet with parchment. In a medium pot over medium heat, melt butter. Add apples, sugar, cinnamon, salt, and lemon juice. Bring to a simmer and cook until apples are soft and most of the juice has cooked off, about 8 minutes. Let cool. 
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    On a lightly floured surface, roll puff pastry out to a 12” square. Divide into 8 rectangles. 
    </li>


    <li>
        <b>Step 3</b>
    <br />
    Spoon apples into center of 4 rectangles, leaving a ¼” border around puff pastry. Top with remaining rectangles and crimp edges together with a fork. Using a sharp knife or kitchen shears, cut 4 slits into tops of each pie. 
    </li>


    
    <li>
        <b>Step 4</b>
    <br />
    In a small bowl, whisk egg with 1 tablespoon cold water to create an egg wash. Brush onto pies. Sprinkle with cinnamon sugar.
    </li>


    
    <li>
        <b>Step 5</b>
    <br />
    Place pies onto prepared pan and bake until golden, 25 minutes.
    </li>



</ul>

<br />
                <img src={recipe15} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>














{/* -----------------------------16th recipe----------------------*/ }





        

             
<p id='waldorf_salad'>

<h1 >Waldorf Salad</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>4 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>5 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>10 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>2 tbsp. mayonnaise</li>
    <li>2 tbsp. plain yogurt (Greek or regular)</li>
    <li>1 tbsp. lemon juice</li>
    <li>1 c. halved red grapes</li>
    <li>1 c. chopped apples</li>
    <li>1 c. sliced celery</li>
    <li>1/4 c. chopped parsley</li>
    <li>Kosher salt</li>
    <li>Freshly ground black pepper</li>
    <li>1 c. walnuts, toasted</li>
    <li>Bibb lettuce, for serving</li>
    
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    In a large bowl, whisk together mayonnaise, yogurt, and lemon juice. 
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    Add grapes, apple, celery, and parsley and fold until just combined. Season with salt and pepper. Top with walnuts and serve over lettuce.
    </li>

    


</ul>

<br />
                <img src={recipe16} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>











{/* -----------------------------17th recipe----------------------*/ }





        

             
<p id='apple_crumble_pie'>

<h1 >Apple Crumble Pie</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>8 - 10 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>30 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>4 hrs 40 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>1 recipe basic pie dough</li>
    <li>3 lb. assorted sweet-tart apples (such as Granny Smith or Honeycrisp) cored, peeled, and sliced ½” thick</li>
    <li>2 tbsp. freshly squeezed lemon juice</li>
    <li>1/2 c. packed brown sugar</li>
    <li>1/4 c. plus 2 tsp. all-purpose flour, plus more for rolling</li>
    <li>1 tsp. ground cinnamon</li>
    <li>1/4 c. chopped parsley</li>
    <li>1/2 tsp. freshly grated nutmeg (optional)</li>
    <li>2 tsp. kosher salt</li>
    <li>1 1/3 c. all-purpose flour</li>
    <li>3/4 c. packed brown sugar</li>
    <li>1/3 c. finely chopped walnuts </li>
    <li>1/4 tsp. ground cinnamon</li>
    <li>1/2 tsp. ground allspice (optional)</li>
    <li>1/2 c. melted butter</li>
   
    
    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Preheat oven to 425º with a baking sheet on the middle rack.  
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    On a lightly floured surface, roll out dough into a 12” circle. Drape over a 9" pie dish and gently press to fit (don’t stretch). Trim edge to a 1” overhang, then tuck dough under itself and crimp edges. Refrigerate 40 minutes or freeze 20 minutes.
    </li>


    
    <li>
        <b>Step 3</b>
    <br />
    Meanwhile, combine apples, lemon juice, sugar, flour, cinnamon, nutmeg if using, and salt in a large bowl and toss to combine.
    </li>




    <li>
        <b>Step 4</b>
    <br />
    Transfer apples to chilled crust. Transfer pie to preheated baking sheet and bake 20 minutes.
    </li>




    <li>
        <b>Step 5</b>
    <br />
    Meanwhile, make crumble topping: in a medium bowl, whisk together flour, sugar, walnuts, salt, cinnamon, and allspice if using. Stir in butter until mixture resembles coarse crumbs.
    </li>






    <li>
        <b>Step 6</b>
    <br />
    After pie has baked for 20 minutes, remove from oven and top with crumble mixture. Reduce heat to 375º, return to oven, and bake until top and crust are golden, 45 to 55 minutes more. (If crust begins to look dark, cover with foil.)
    </li>



    


    <li>
        <b>Step 7</b>
    <br />
    Let cool to room temperature, at least 3 hours, before slicing and serving.
    </li>

    


</ul>

<br />
                <img src={recipe17} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>














{/* -----------------------------18th recipe----------------------*/ }





        

             
<p id='apple_crisp_pound_cake'>

<h1>Apple Crisp Pound Cake</h1>

<div className="cooking__time__container">

    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>YIELDS</div> <div style={{color:'green'}}>8 serving(s)</div></div>
    <div style={{display:'flex',flexDirection:'column',width:'33%'}}><div>PREP TIME</div> <div style={{color:'green'}}>25 mins</div></div>
    <div style={{display:'flex',flexDirection:'column',textAlign:'center',width:'33%'}}><div>TOTAL TIME</div> <div style={{color:'green'}}>1 hr 40 mins</div></div>

</div>

<h2>Ingredients</h2>
<br />
<ul>
    <li>Cooking spray</li>
    <li>2 apples, peeled, cored, and diced  </li>
    <li>Juice of 1/2 a lemon </li>
    <li>1/4 c. packed brown sugar, plus 2 tbsp, divided </li>
    <li>1 1/2 tsp. cinnamon, divided </li>
    <li>1 1/2 c. all-purpose flour </li>
    <li>1 tsp. baking powder</li>
    <li>1 tsp. kosher salt </li>
    <li>1 c. (2 sticks) butter, softened</li>
    <li>3/4 c. granulated sugar </li>
    <li>4 large eggs </li>
    <li>1 tsp. pure vanilla extract </li>
    <li>1/4 c. all-purpose flour</li>
    <li>3 tbsp. packed brown sugar </li>
    <li>1/4 c. chopped pecans </li>
    <li>1/4 c. rolled oats</li>
    <li>3 tbsp. melted butter</li>
    <li>1/2 c. powdered sugar</li>
    <li>1 1/2 tbsp. heavy cream </li>
    <li>1 tsp. pure vanilla extract </li>

    
</ul>

<br />
<h2>Directions</h2>
<br />
<ul>


    <li>
        <b>Step 1</b>
    <br />
    Preheat oven to 350°. Line a loaf pan with parchment and grease with cooking spray. In a medium bowl, toss apples with lemon juice, 2 tablespoons brown sugar, and ½ tsp cinnamon. In another medium bowl, whisk together flour, baking powder, salt, and remaining 1 teaspoon cinnamon.  
    
    </li>


    <li>
        <b>Step 2</b>
    <br />
    In a large bowl using a hand mixer, beat butter, granulated sugar, and remaining ¼ cup brown sugar together. Add eggs, one at a time, until incorporated, then add vanilla. Add dry ingredients and mix until just combined, then fold in apples. 
    </li>





    <li>
        <b>Step 3</b>
    <br />
    To make topping, in a medium bowl, combine flour, sugar, pecans, oats, and a pinch of salt. Add melted butter and mix until mixture resembles wet sand. 
    </li>



    

    <li>
        <b>Step 4</b>
    <br />
    Pour batter into prepared loaf pan and top with oat mixture. Bake until a toothpick inserted in middle comes out clean and topping is golden, about 1 hour. Let cool completely. 
    </li>


    

    <li>
        <b>Step 5</b>
    <br />
    Make glaze: In a medium bowl combine powdered sugar,  heavy cream, and vanilla. Thin with more heavy cream until desired consistency is reached. 
    </li>



    

    <li>
        <b>Step 6</b>
    <br />
    Drizzle glaze over pound cake before serving. 
    </li>
    


</ul>

<br />
                <img src={recipe18} alt="" className='apple__recipes__imgs' />
            

<div className='bottom__line'></div>

</p>





















             </div>
             </div>
  )
}
