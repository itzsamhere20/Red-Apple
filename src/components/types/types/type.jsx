import React, {useState} from 'react'
import Navbar from '../../navbar/navbar'
import "./type.css"
import typeimg from "../../assets/type.jpg";
import type1 from '../../assets/type1.png'
import type2 from '../../assets/type2.png'
import type3 from '../../assets/type3.png'
import type4 from '../../assets/type4.png'
import type5 from '../../assets/type5.png'
import type6 from '../../assets/type6.png'
import type7 from '../../assets/type7.png'
import type8 from '../../assets/type8.png'
import type9 from '../../assets/type9.png'
import type10 from '../../assets/type10.png'
import type11 from '../../assets/type11.png'
import type12 from '../../assets/type12.png'
import type13 from '../../assets/type13.png'
import type14 from '../../assets/type14.png'
import type15 from '../../assets/type15.png'
import type16 from '../../assets/type16.png'
import type17 from '../../assets/type17.png'
import type18 from '../../assets/type18.png'
import type19 from '../../assets/type19.png'
import type20 from '../../assets/type20.png'
import type21 from '../../assets/type21.png'
import type22 from '../../assets/type22.png'
import type23 from '../../assets/type23.png'
import type24 from '../../assets/type24.png'
import type25 from '../../assets/type25.png'
import type26 from '../../assets/type26.png'


export default function Type() {
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
    
    <div  className='blogs__container' id="apple_types">
    <Navbar/>
    <div className="blog__heading__section">
        <img src={typeimg} alt=" red apple in bag " className='blog__heading__img' />
           
              <div className="blog__metadata">
              <div className="blog__heading">
                Types of Apple 
                </div>
    
            </div>
    </div>

    <div className="blog__paragraph__section" style={{filter: scrolled? 'none': 'blur(3px)',transition:'0.3s all linear'}}>  
        <h1>
        Apple varieties
        </h1>
        <p>
        Farmers markets offer an endless supply of different types of apples in the fall, with a limited number of varieties available at grocery stores.
        <br />
        <br />
        Each type of apples can be rated on several characteristics:
        <br />
        <br />
        <ul>
          <li>How sweet or tart does it taste?</li>
          <li>How firm or soft is the flesh?</li>
          <li>Is the flavor mild or strong?</li>
        </ul>
        <br />
        The answers also determine the best uses for each type of apple. For example, firm apples tend hold their shape when baked into a pie, but make a chunky apple sauce. Whereas soft apples break down in a pie but make a smooth sauce.
        <br />
        <br />
        


        <div className='apple__types__container'>




          <div className="apple__types__section" id='fuji'>
            
            <div className="apple__types__left__side">
              <img src={type5}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Fuji</h1>
              <p>A reliably sweet variety, making it a favorite for fresh eating.</p>
              <br />
              <ul>
                <li>Stands out as the sweetest snacking variety</li>
                <li>Firm, crisp flesh that holds up when baked</li>
                <li>Quick to brown</li>
                <li>Good storage apple</li>
              </ul>

            </div>

          </div>



          <div className="apple__types__section" id='honeycrisp'>
            <div className="apple__types__left__side">
              <img src={type12}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Honeycrisp</h1>
              <p>A crispy, almost fizzy flesh makes this a favorite snacking apple.</p>
              <br />
              <ul>
                <li>Sweet, honey-apple flavor (very slight tart flavor, but sweet flavor dominates)</li>
                <li>Firm, crisp flesh that holds its shape when baked</li>
                <li>Also has excellent flavor and texture when baked into a pie</li>
              
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='gala'>
            <div className="apple__types__left__side">
              <img src={type6}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Gala</h1>
              <p>Because of the mild flavor and thin skin, these are a favorite among kids.</p>
              <br />
              <ul>
                <li>Sweet, mild pear-like flavor, but not complex</li>
                <li>Sweet, mild pear-like flavor, but not complex</li>
                <li>Very thin skinned</li>
                <li>Slow to brown</li>
              </ul>

            </div>

          </div>





          <div className="apple__types__section" id='golden_supreme'>
            <div className="apple__types__left__side">
              <img src={type10}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Golden Supreme</h1>
              <p>A descendant of Golden Delicious but with slightly stronger flavor, especially when baked. Great apple for early-season pies in September.</p>
              <br />
              <ul>
                <li>Sweet, apple flavor. Not complex but very appley.</li>
                <li>Firm flesh that softens when baked and holds its shape</li>
                <li>Best when fresh, loses flavor when stored</li>
                
              </ul>

            </div>

          </div>





          <div className="apple__types__section" id='ambrosia'>
            <div className="apple__types__left__side">
              <img src={type1}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Ambrosia</h1>
              <p>A very juicy apple with an distinct flavor. It has noticeable floral-honey notes as well as banana (which comes out even more when baked).</p>
              <br />
              <ul>
                <li>Sweet with almost no tartness and a floral-honey or banana flavor</li>
                <li>Firm flesh that softens when baked and holds its shape</li>
                <li>Slow to brown, making it great on salads and cheese boards as well</li>
                
              </ul>

            </div>

          </div>





          <div className="apple__types__section" id='golden_delicious'>
            <div className="apple__types__left__side">
              <img src={type8}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Golden Delicious</h1>
              <p>A classic apple flavor with medium sweetness and medium firmness. The sweetest green/yellow apples and great for pie.</p>
              <br />
              <ul>
                <li>Sweet, buttery apple flavor</li>
                <li>Medium firm, softens when baked but holds its shape.</li>
                <li>Quick to shrivel if not stored in a high-humidity crisper drawer.</li>
                <li>Not related to Red Delicious</li>
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='envy'>
            <div className="apple__types__left__side">
              <img src={type4}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Envy</h1>
              <p>A cross between Braeburn and Royal Gala, Envy is the trademarked name for the Scilate variety.</p>
              <br />
              <ul>
                <li>Sweet and slightly floral. A mild flavor similar to gala but slightly stronger</li>
                <li>Thick skin, crisp juicy flesh</li>
                <li>Slower to soften when baked and can be grainy</li>
                <li>Very slow to brown</li>
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='red_delicious'>
            <div className="apple__types__left__side">
              <img src={type23}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Red Delicious</h1>
              <p>This beautiful apple over promises and under delivers due to the focus on appearance above all else.</p>
              <br />
              <ul>
                <li>Sweet, but bland flavor</li>
                <li>Skins are thick and tannic</li>
                <li>Flesh is often mealy</li>
                <li>Short storage life</li>
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='granny_smith'>
            <div className="apple__types__left__side">
              <img src={type11}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Granny Smith</h1>
              <p>This apple will always be tart, regardless of the climate or when it was harvested.</p>
              <br />
              <ul>
                <li>Extra tart</li>
                <li>Firm, crisp flesh that holds its shape and is slow to soften when baked</li>
                <li>Lends tartness to pies, but not a lot of apple flavor</li>
                <li>Good storage apple</li>
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='pink_lady'>
            <div className="apple__types__left__side">
              <img src={type21}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Pink Lady</h1>
              <p>Pink Lady apples are Cripps Pink that have met quality specifications, earning the brand name. This actually helps ensure each Pink Lady apple will taste similar.</p>
              <br />
              <ul>
                <li>Tart with a very sweet finish and good apple flavor with hints of melon</li>
                <li>Firm, crisp flesh that holds up when baked</li>
                <li>Slow to brown</li>
                <li>Good storage apple</li>
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='jonathan'>
            <div className="apple__types__left__side">
              <img src={type15}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Jonathan</h1>
              <p>These small apples are tart, but not as much as Granny Smiths. Their dark red color, smaller size, tartness, thick skin, and long shelf life make them the ideal variety for caramel apples.</p>
              <br />
              <ul>
                <li>Tart and slightly sweet</li>
                <li>Firm, crisp flesh that softens considerably when baked, but mostly holds its shape</li>
                <li>Good storage apple</li>
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='mcIntosh'>
            <div className="apple__types__left__side">
              <img src={type17}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>McIntosh</h1>
              <p>These have a classic apple-spice flavor perfect for cider. They will turn to mush when heated, making them excellent for applesauce and butter, not so much for pie.</p>
              <br />
              <ul>
                <li>Tart flavor, but least of all the tart apples. Apple cider flavor comes out even more when baked.</li>
                <li>Soft flesh that breaks down when baked or heated</li>
                <li>Thick skin</li>
                <li>Technically stores well when not bruised, but loses flavor quicker than other good storage varieties</li>
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='mutsu/crispin'>
            <div className="apple__types__left__side">
              <img src={type19}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Mutsu / Crispin</h1>
              <p>A good candidate for apple cider, especially if you get ones that are on the spicier side.</p>
              <br />
              <ul>
                <li>Just barely more tart than sweet with cider flavor, sometimes a hint of anise. Skin can be chewy.</li>
                <li>Crisp firm texture that holds its shape when baked, but can be grainy</li>
                <li>Can get exceptionally large (and still taste good)</li>
      
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='jonamac'>
            <div className="apple__types__left__side">
              <img src={type14}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Jonamac</h1>
              <p>A cross between Jonathan and McIntosh, this apple inherited that tart flavor.</p>
              <br />
              <ul>
                <li>Tart and slightly sweet with an apple cider, spiced nutmeg flavor</li>
                <li>Medium-firm flesh, but will fall apart when baked</li>
                <li>Quick to brown</li>
              
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='braeburn'>
            <div className="apple__types__left__side">
              <img src={type2}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Braeburn</h1>
              <p>An perfect sweet-tart balance with hints of cider and citrus zest. It is the best late-season apple for making pie in November.</p>
              <br />
              <ul>
                <li>Sweet-tart apple flavor</li>
                <li>Firm, crisp flesh that softens but holds shape well when baked</li>
                <li>Great apple flavor that's both sweet and tart even when baked</li>
                <li>One of the best apples for pie</li>
                <li>Late season, often not showing up until mid-October</li>
              </ul>

            </div>

          </div>





          <div className="apple__types__section" id='nothern_spy'>
            <div className="apple__types__left__side">
              <img src={type20}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Northern Spy</h1>
              <p>Another top-notch apple for pie due to its strong sweet-tart flavor and excellent texture when baked. Also a favorite for ciders.</p>
              <br />
              <ul>
                <li>Very sweet and very tart with a good apple flavor and sometimes notes of pear</li>
                <li>Thin skin and butter-yellow colored flesh when ripe</li>
                <li>Crisp flesh that has a perfect tender texture when baked</li>
                <li>Good for long-term storage (even if it has bruises, a rare trait)</li>
              </ul>

            </div>

          </div>





          <div className="apple__types__section" id='golden_russet'>
            <div className="apple__types__left__side">
              <img src={type9}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Golden Russet</h1>
              <p>Considered the "Champagne of cider apples" due to its intense, complex flavor and incredibly high sugar content (21%) to encourage fermentation.</p>
              <br />
              <ul>
                <li>Very sweet, spicy, only slightly tart. Rich, complex flavor that might have notes of honey, figs, apricots, pears, and even green pepper (from the skin)</li>
                <li>Very dense, hard, crunchy flesh that stays fairly crunchy when baked (and can get grainy)</li>
                <li>Loses flavor complexities when baked</li>
                <li>Good for long-term storage</li>
              </ul>

            </div>

          </div>





          <div className="apple__types__section" id='winesap'>
            <div className="apple__types__left__side">
              <img src={type26}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Winesap</h1>
              <p>Winesaps have a spicy flavor with some bitter notes (which works quite well to balance a sweet apple cider).</p>
              <br />
              <ul>
                <li>Sweet-tart, spicy flavor that improves with storage</li>
                <li>Very hard flesh and thick skin</li>
                <li>Holds shape when baked, but sometimes turns grainy</li>
                <li>Popular in warmer climates as the tree doesn't need cold winters to set fruit like most apple varieties.</li>
              </ul>

            </div>

          </div>





          <div className="apple__types__section" id='jonagold'>
            <div className="apple__types__left__side">
              <img src={type13}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Jonagold</h1>
              <p>An excellent example of an apple with a sweet-tart balance and great flavor. A cross between Jonathan and Golden Delicious.</p>
              <br />
              <ul>
                <li>Sweet-tart apple flavor</li>
                <li>Medium-firm, crisp flesh that softens but holds shape well when baked. Great flavor in apple pie.</li>
                <li>Thin skin</li>
          
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='ginger_gold'>
            <div className="apple__types__left__side">
              <img src={type7}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Ginger Gold</h1>
              <p>One of the tastiest early-season varieties.</p>
              <br />
              <ul>
                <li>Slightly spiced sweet-tart flavor</li>
                <li>Medium-firm, crisp flesh that softens but holds shape well when baked</li>
                <li>Slow to brown</li>
              </ul>

            </div>

          </div>


          
          <div className="apple__types__section" id='cortland'>
            <div className="apple__types__left__side">
              <img src={type3}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Cortland</h1>
              <p>Similar to McIntosh in flavor and texture, but slightly firmer.</p>
              <br />
              <ul>
                <li>Sweet-tart with a slight cider flavor, can taste a bit sour when baked.</li>
                <li>Medium firm flesh softens quite a bit when baked and can get mushy (similar to McIntosh)</li>
                <li>Flesh is strikingly white compared to most other varieties</li>
                <li>Slow to brown, a great apple for salads</li>
              </ul>

            </div>

          </div>



          <div className="apple__types__section" id='rave'>
            <div className="apple__types__left__side">
              <img src={type22}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Rave</h1>
              <p>As a Honeycrisp descendant, this apple has its parent's sweetness, but also a little more acidity.</p>
              <br />
              <ul>
                <li>Sweet-tart flavor (slightly more sweet than tart)</li>
                <li>Slight jolly rancher flavor when baked</li>
                <li>Slow to brown</li>
                <li>Crisp bite but airy flesh sometimes falls apart when baked</li>
                <li>A trademarked variety</li>
              </ul>

            </div>

          </div>



          <div className="apple__types__section" id='juici'>
            <div className="apple__types__left__side">
              <img src={type16}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Juici</h1>
              <p>A Honeycrisp & Braeburn cross, this apple is a little more tart than Honeycrisp.</p>
              <br />
              <ul>
                <li>Sweet-tart flavor (slightly more sweet than tart)</li>
                <li>Crispy and juicy, even at room temperature</li>
                <li>Very dense flesh that takes longer to soften when baked</li>
                <li>Thin skin</li>
                <li>Slow to brown</li>
                <li>A trademarked variety</li>
              </ul>

            </div>

          </div>



          <div className="apple__types__section" id='swiss'>
            <div className="apple__types__left__side">
              <img src={type25}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Swiss</h1>
              <p>A mild-flavored descendant of Golden Delicious.</p>
              <br />
              <ul>
                <li>Sweet-tart balance, with noticeable pear-like flavor that comes out when baked</li>
                <li>Medium-firm flesh</li>
                <li>Skin naturally feels greasy (not waxy)</li>
                <li>Smaller than average in size</li>
              </ul>

            </div>

          </div>




          <div className="apple__types__section" id='mollie/molly'>
            <div className="apple__types__left__side">
              <img src={type18}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Mollie / Molly</h1>
              <p>I've seen this labeled both ways - it's a mild-flavored descendant of Golden Delicious and Gravenstein.</p>
              <br />
              <ul>
                <li>Sweet-tart, mild flavor</li>
                <li>Soft apple that softens a lot when baked, but will usually hold its shape</li>
                <li>Thin skin</li>
              </ul>

            </div>

          </div>



          <div className="apple__types__section" id='rome_beauty'>
            <div className="apple__types__left__side">
              <img src={type24}  className='apple__types__imgs' />

            </div>
            <div className="apple__types__right__side">
              <h1>Rome Beauty</h1>
              <p>A beautiful apple with paint-spatter marks falls flat on flavor. Marketed as the "queen of baking apples" because it isn't good for much else, not because it excels in baked goods.</p>
              <br />
              <ul>
                <li>Bland, mildly sweet and slightly tart with a floral aroma that doesn't come across when eaten</li>
                <li>Holds shape when baked but can be crunchy or mealy</li>
                <li>Great for growers due to its heavy crop, resistance to disease, and attractive appearance</li>
            
              </ul>

            </div>

          </div>



        </div>








        </p>




            </div>
            </div>
  )
}
