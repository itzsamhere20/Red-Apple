import React from 'react'  
import "./recipes.css"
import { HashLink } from 'react-router-hash-link'
import Navbar from '../navbar/navbar'
import recipe from "../assets/recipe.jpg"
import recipe1 from "../assets/recipe1.jpg"
import recipe2 from "../assets/recipe2.jpg"
import recipe3 from "../assets/recipe3.jpg"
import recipe4 from "../assets/recipe4.jpg"
import recipe5 from "../assets/recipe5.jpg"
import recipe6 from "../assets/recipe6.jpg"
import recipe7 from "../assets/recipe7.jpg"
import recipe8 from "../assets/recipe8.jpg"
import recipe9 from "../assets/recipe9.jpg"
import recipe10 from "../assets/recipe10.jpg"
import recipe11 from "../assets/recipe11.jpg"
import recipe12 from "../assets/recipe12.jpg"
import recipe13 from "../assets/recipe13.jpg"
import recipe14 from "../assets/recipe14.jpg"
import recipe15 from "../assets/recipe15.jpg"
import recipe16 from "../assets/recipe16.jpg"
import recipe17 from "../assets/recipe17.jpg"
import recipe18 from "../assets/recipe18.jpg"


export default function Recipes() {
  return (
    <div  className='blogs__container' id="apple_recipes">
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
        <h1>
       Recipes
        </h1>
             <p>
             It's never too early to start planning your seasonal apple-baking schedule. Between apple cakes, apple pies, baked apple oatmeal for breakfast, and even apple-inspired dinners, it's basically a crime not to eat an apple a day during the fall. As far as we're concerned, an apple cobbler a day 100% keeps the doctor away.
             <br />
             <br />
             One of our favorite fall activities? Apple picking. We go wild for all the different apple varieties, fresh cider donuts, steaming cups of apple cider, wearing a scarf, hay rides...we could go on and on. If you've never been, we've got all the tips for apple picking as well as how to use all the different apple types you bring home.
             <br /><br />
            
        <div className='apple__recipes__container'>




<div className="apple__recipes__section" >
  
  <div className="apple__recipes__left__side" >
    <img src={recipe1}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Apple Hand Pies</h1>
    <p>Hear us out: Hand pies just might be better than regular pies. They have the perfect crust-to-filling ratio. They're less work than a classic double-crust pie too. But perhaps the best part? No soggy bottoms. Plus, hand pies are delicious and can be filled with everything from blueberries to peaches.</p>
    <br />
    <HashLink to="../apple_recipes#apple_hand_pies" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>




<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe2}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Sheet-Pan Pork Chops With Apples</h1>
    <p>Not all sheet-pan dinners are created equal. Sheet-pan pork chops with apples falls into the camp of excellence, packing in tons of caramelized flavor with a short-ingredient list onto one pan. Looking for more ways to put your sheet pans to use? Try sheet-pan panzanella and sheet-pan quesadillas next!.</p>
    <br />
    <HashLink to="../apple_recipes#sheet_pan_pork_chops_with_apples" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>





<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe3}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Classic Apple Pie</h1>
    <p>A homemade apple pie that will even impress your grandma. We like to fill our homemade flaky, buttery, lattice crust with a combination of apples for an irresistibly sweet-tart filling. You’ll know the pie is ready to come out of the oven when the filling bubbles and the crust is golden.</p>
    <br />
    <HashLink to="../apple_recipes#classic_apple_pie" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>





<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe4}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Baked Apple Oatmeal</h1>
    <p>Baked apple oatmeal is ideal for family breakfasts or for big-batch breakfast prep. Each bite is studded with chunks of tart Granny Smith apples and toasted walnuts. There's just enough cinnamon and nutmeg to infuse the dish with a cozy autumn aroma without overpowering the other flavors.</p>
    <br />
    <HashLink to="../apple_recipes#baked_apple_oatmeal" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>





<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe5}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Pork Chops with Apples</h1>
    <p>Delicious pork chops that aren't dry can very much be a thing! These easy pork chops get cooked with apples and onions that provide tons of flavor and then simmered in apple cider for a little sweetness and keeps them from drying out.</p>
    <br />
    <HashLink to="../apple_recipes#pork_chops_with_apples" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>





<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe6}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Apple Galette</h1>
    <p>True story: We LOVE making galettes. Why? They've got all the delicious elements of apple pie: flaky, buttery crust, and tender baked fruit. What they don't have is fussy technique: no crimping, no lattice work, and absolutely no blind baking. Sometimes, it's okay to take the easy road.</p>
    <br />
    <HashLink to="../apple_recipes#apple_galette" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>




<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe7}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Caramel Apples</h1>
    <p>Caramel apples are one of fall's greatest pleasures, and they're also super fun to personalize. We love toasted chopped peanuts, but you could dip your apples in pretty much anything: crushed cinnamon cereal, chopped Reese's Pieces, multicolored sprinkles, chopped Oreos... the list goes on and on.</p>
    <br />
    <HashLink to="../apple_recipes#caramel_apples" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>




<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe8}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Chicken Salad Sandwich</h1>
    <p>Chicken salad sandwiches are one of our absolute favorite things to do with a rotisserie chicken, and the the mix-ins are all up to you. We add the crispy celery, tart apple, and herbaceous dill for a bright and slightly tangy bite, but you could add things like bacon, olives, and even kimchi!.</p>
    <br />
    <HashLink to="../apple_recipes#chicken_salad_sandwich" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>




<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe9}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side"  >
    <h1>Apple Cookies</h1>
    <p>hat's better than a dessert that tastes exactly like fall? These cookies are begging to be served with pumpkin spice lattes in front of a blazing fire with red and orange leaves waving outside in the crisp air.</p>
    <br />
    <HashLink to="../apple_recipes#apple_cookies" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>




<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe10}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Caramel Apple Tart</h1>
    <p>No one needs to know how ridiculously simple this four-ingredient dessert really is—all you need is puff pastry, cinnamon, caramel sauce, and apples to make this impressive and delicious stunner.</p>
    <br />
    <HashLink to="../apple_recipes#caramel_apple_tart" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>




<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe11}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Apple Coffee Cake</h1>
    <p>Apples work wonders in this easy coffee cake. They add extra sweetness as well as making the cake extra moist and tender. We love it with Granny Smith and Honeycrisp apples, but your favorite baking apple will do the trick!.</p>
    <br />
    <HashLink to="../apple_recipes#apple_coffee_cake" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>




<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe12}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Apple Pie Bars</h1>
    <p>We love apple pie more than anything in the fall, but we don't always want to fuss with a whole pie. With a no-fuss crust that you press (not roll), they're much easier. If you love these, you'll have to make these pumpkin pie bars next!.</p>
    <br />
    <HashLink to="../apple_recipes#apple_pie_bars" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>




<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe13}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Best Apple Crisp</h1>
    <p>Anyone can make a good apple crisp. Even if they "hate to bake," apple crisp is so much easier to make than an apple pie. There's no fussy pie crust to make or roll out. The topping gets simply sprinkled on top for a beautiful, buttery crisp top that makes it all even more delectable.</p>
    <br />
    <HashLink to="../apple_recipes#apple_crisp" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>






<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe14}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Best-Ever Farro Salad</h1>
    <p>With nuts, cheese, fruit, and leafy greens, this salad really feels like a full meal—aka a meal prepper's dream. It makes the perfect not-so-sad desk lunch. Top it with some sliced grilled chicken or baked salmon, and you've got yourself a very hearty, very healthy meal.</p>
    <br />
    <HashLink to="../apple_recipes#farro_salad" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>




<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe15}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>McDonald's Apple Pie</h1>
    <p>Our copycat version of the McDonald's apple pie skips the deep fry and is baked instead for a better take on the restaurant favorite. We used puff pastry so you still get all of those flaky layers and buttery crust. Serve it with some homemade caramel for an extra special treat!.</p>
    <br />
    <HashLink to="../apple_recipes#mcDonald's_apple_pie" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>





<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe16}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Waldorf Salad</h1>
    <p>Created in 1896 for a charity ball held at the Waldorf-Astoria hotel in New York City, this salad used to be composed of three ingredients: apples, celery, and mayo. Since then, it's evolved, and our version is topped with toasted walnuts and juicy grapes enveloped in a creamy, lemony dressing. It's the best of both worlds: light enough to feel like a refreshing salad and sweet enough to feel like a snacky dessert.</p>
    <br />
    <HashLink to="../apple_recipes#waldorf_salad" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>





<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe17}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Apple Crumble Pie</h1>
    <p>Can't decide between a classic apple pie and a crispy-topped apple crumble? We have good news—this hybrid of the two is just as good as it sounds!.</p>
    <br />
    <HashLink to="../apple_recipes#apple_crumble_pie" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>





<div className="apple__recipes__section" >
  <div className="apple__recipes__left__side" >
    <img src={recipe18}  className='apple__recipe__imgs' />

  </div>
  <div className="apple__recipes__right__side" >
    <h1>Apple Crisp Pound Cake</h1>
    <p>A pound cake is perfect in its own way, and we love them year round. We dressed ours up to match the fall season with crisp apples and a buttery crumb topping that you'll want to put over everything. Drizzle the top with a simple glaze to top off this perfect dessert.</p>
    <br />
    <HashLink to="../apple_recipes#apple_crisp_pound_cake" smooth className="apple__recipes__btn">Recipe</HashLink>
  </div>

</div>









</div>


             </p>
      </div>



          </div>
  )
}
