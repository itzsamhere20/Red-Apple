import React from 'react'
import "./recipe.css"
import Navbar from '../../navbar/navbar'
import recipe from "../../assets/recipe.jpg"

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
        
             <p>

                <h1 id='apple_hand_pies'>Apple Hand Pies</h1>

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
                <div className='bottom__line'></div>
               
             </p>



{/* -----------------------------2nd recipe----------------------*/ }

             
             <p>

                <h1 id='apple_hand_pies'>Apple Hand Pies</h1>

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
                <div className='bottom__line'></div>
               
             </p>







{/* -----------------------------2nd recipe----------------------*/ }

             
             <p>

                <h1 id='sheet_pan_pork_chops_with_apples'>Sheet-Pan Pork Chops With Apples</h1>

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

                
                <div className='bottom__line'></div>
               
             </p>

             











             </div>
             </div>
  )
}
