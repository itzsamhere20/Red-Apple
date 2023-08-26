import React,{ useState} from 'react'
import Navbar from '../../../navbar/navbar'
import "../feature1/appleSeason.css"
import appleseasonimg from "../../../assets/feature1.jpg"
import feature1_1 from "../../../assets/feature1.1.png"
import { HashLink } from 'react-router-hash-link'
import type1 from '../../../assets/type1.png'
import type2 from '../../../assets/type2.png'
import type3 from '../../../assets/type3.png'
import type4 from '../../../assets/type4.png'
import type5 from '../../../assets/type5.png'
import type6 from '../../../assets/type6.png'
import type7 from '../../../assets/type7.png'
import type8 from '../../../assets/type8.png'
import type9 from '../../../assets/type9.png'
import type10 from '../../../assets/type10.png'
import type11 from '../../../assets/type11.png'
import type12 from '../../../assets/type12.png'
import type13 from '../../../assets/type13.png'
import type14 from '../../../assets/type14.png'
import type15 from '../../../assets/type15.png'
import type16 from '../../../assets/type16.png'
import type17 from '../../../assets/type17.png'
import type18 from '../../../assets/type18.png'
import type19 from '../../../assets/type19.png'
import type20 from '../../../assets/type20.png'
import type21 from '../../../assets/type21.png'
import type22 from '../../../assets/type22.png'
import type23 from '../../../assets/type23.png'
import type24 from '../../../assets/type24.png'
import type25 from '../../../assets/type25.png'
import type26 from '../../../assets/type26.png'

import Atropos from 'atropos/react';
import 'atropos/css/min'

export default function AppleSeason() {
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
    <div  className='blogs__container' id="apple_season">
        <Navbar/>
        <div className="blog__heading__section">
            <img src={appleseasonimg} alt=" red apples in bag " className='blog__heading__img' />
               
                  <div className="blog__metadata">
                  <div className="blog__heading">
                    Apple Season
                    </div>
        
                </div>
        </div>

        <div className="blog__paragraph__section" style={{filter: scrolled? 'none': 'blur(3px)',transition:'0.3s all linear'}}>  
            <h1>
            Apple
            </h1>
            <p>
            Apples are in-season in fall, where you can find dozens of varieties at your local farmers market and a fresh, seasonal supply of more common types of apples at the grocery store.
           <div className='floating__apple'> <img src={feature1_1} alt=""  className='feature__img'/></div>
          
           <br />
           <h1>
           When are apples in season?

           </h1>
           <br />
           While apples are available at the grocery store year-round, they are best eaten when in season: August through December. In-season apples are juicy, crisp, and flavorful.
           <br /><br />
           Apples sold out-of-season (in spring and summer) have been in commercial cold-storage facilities that do an okay job at keeping them fresh, but they are much more likely to be mealy and definitely lose crispness.
           <br /><br />
           The harvest dates vary a little based on the climate they're grown in. Warmer growing regions harvest about 1-2 weeks sooner than the average, and cooler growing areas harvest 1-2 weeks later.
           <br />
           <br />
           <ul>
            <li>Warm growing region examples: California Central Valley, southern states</li>
            <li>Average: Michigan, Pennsylvania, most of Washington state</li>
            <li>Cool growing regions: cool coastal areas, mountain regions</li>
           </ul>
           <br />
           The harvest dates listed by season in the next sections are based on the average dates they first become available.
           <br />
           <br />
           <table>     
         <tr>
             <th>Early sesaon (Aug & Sept)</th>
             <th>Mid season 
             (Sept & Oct)</th>
             <th>Late season
             (Oct & Nov)</th>
         </tr>
         <tr>
            <td><div     className='table__links'>Honeycrisp</div></td>
            <td><div     className='table__links'>Golden Delicious</div></td>
            <td><div     className='table__links'>Braeburn</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Golden Supreme</div></td>
            <td><div     className='table__links'>Jonagold</div></td>
            <td><div     className='table__links'>Fuji</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Ginger Gold</div></td>
            <td><div     className='table__links'>Jonathan</div></td>
            <td><div     className='table__links'>Winesap</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Rave</div></td>
            <td><div     className='table__links'>Ambrosia</div></td>
            <td><div     className='table__links'>Rome Beauty</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Gala</div></td>
            <td><div     className='table__links'>Mutsu / Crispin </div></td>
            <td><div     className='table__links'>Granny Smith</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Mcintosh</div></td>
            <td><div     className='table__links'>Cortland</div></td>
            <td><div     className='table__links'>Cripps Pink</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Mollie</div></td>
            <td><div     className='table__links'>jonamac</div></td>
            <td><div     className='table__links'>Golden Russet</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Paula Red</div></td>
            <td><div     className='table__links'>Red Delecious</div></td>
            <td><div     className='table__links'>Envy</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Chehalis</div></td>
            <td><div     className='table__links'>Swiss</div></td>
            <td><div     className='table__links'>Juici</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Gravenstien</div></td>
            <td><div     className='table__links'>Cameo</div></td>
            <td><div     className='table__links'>Nothern Spy</div></td>
            
         </tr>
         <tr>
            <td><div     className='table__links'>Lodi</div></td>
            <td><div     className='table__links'>Empire</div></td>
            <td><div     className='table__links'>Melrose</div></td>
            
         </tr>
         <tr>
            <td> </td>
            <td><div     className='table__links'>Honeygold</div></td>
            <td> </td>
            
         </tr>
         <tr>
            <td> </td>
            <td><div     className='table__links'>Macoun</div></td>
            <td> </td>
            
         </tr>

            
            
           </table>
           <br />
           <h1 id='apple_varieties'>Varieties</h1>
           <br />
           There are so many different types of apples, it's hard to try them all. Stop by your farmer's market this fall for interesting varieties you can't find at the grocery store.
           <br />
           <br />

           <div className="apple__varieties" >


          <HashLink   to='../types#ambrosia' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" >
               <img src={type1} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Ambrosia</h5>
                  <p>
                     Very juicy with a distinct flavor of honey and banana. Sweet with almost no tartness and slow to brown.
                  </p>
               </div>
            </Atropos>
            </HashLink>



          <HashLink   to='../types#braeburn' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type2} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Braeburn</h5>
                  <p>
                  Perfect sweet-tart balance with hints of cider. Excellent texture and flavor when baked. Late season variety.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#cortland' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type3} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Cortland</h5>
                  <p>
                Sweet-tart balance wih slight cider flavor and bright white flesh that's slow to brown.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#envy' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type4} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Envy</h5>
                  <p>
                  Sweet, crisp, and juicy (a cross between Braeburn and Royal Gala).
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#fuji' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type5} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Fuji</h5>
                  <p>
                  Reliably the sweetest apple, quick to brown, long shelf life.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#gala' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type6} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Gala</h5>
                  <p>
                  Sweet, firm, crisp flesh with mild flavor. Slow to brown.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#ginger_gold' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type7} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Ginger Gold</h5>
                  <p>
                  Slightly spiced sweet-tart flavor (one of the tastiest early-season varieties), slow to brown.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#golden_delicious' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type8} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Golden Delicious</h5>
                  <p>
                  Lightly sweet, buttery, classic apple flavor.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#golden_russet' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type9} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Golden Russet</h5>
                  <p>
                  "Champagne of cider apples" - Very sweet, spicy, rich complex flavor of honey, figs, apricots, pears, and sometimes green pepper.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#golden_supreme' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type10} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Golden Supreme</h5>
                  <p>
                  Descendant of Golden Delicious with a stronger apple flavor. Not complex but apple flavor holds when baked and good texture. Excellent for early season apple pies.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#granny_smith' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type11} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Granny Smith</h5>
                  <p>
                  Extremely tart apple. Adds tart flavors to baked goods, but not much sweetness or other apple flavor. One-dimensional.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#honeycrisp' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type12} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Honeycrisp</h5>
                  <p>
                  Very sweet with hint of tartness.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#jonagold' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type13} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Jonagold</h5>
                  <p>
                  Sweet-tart balance with excellent apple flavor, softens but holds shape when baked.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#jonamac' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type14} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Jonamac</h5>
                  <p>
                  Tart, spiced nutmeg flavor and falls apart when baked.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#jonathan' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type15} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Jonathan</h5>
                  <p>
                  Tart & slightly sweet. Small size, thick skin, good shelf life makes for best caramel apple.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#juici' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type16} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Juici</h5>
                  <p>
                  Sweet and slightly tart, thin skin, slow to brown (cross between Honeycrisp and Braeburn).
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#mcIntosh' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type17} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>McIntosh</h5>
                  <p>
                  Mild sweet-tart cider flavor. Soft flesh breaks down easily when cooked, making it great for applesauce & apple butter. 
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#mollie/molly' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type18} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Mollie</h5>
                  <p>mild, sweet-tart balance.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#mutsu/crispin' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type19} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Mutsu</h5>
                  <p>
                  More tart than sweet with apple cider flavor and can have a hint of anise.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#nothern_spy' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type20} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Northern Spy</h5>
                  <p>
                  A top notch apple for pie due to its excellent flavor and texture when baked. Also great for ciders.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#pink_lady' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type21} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Pink Lady</h5>
                  <p>
                  More tart than sweet with firm flesh that holds up extremely well when baked. Slow to brown.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#rave' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type22} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Rave</h5>
                  <p>
                  Sweet-tart flavor, slow to brown, and falls apart when baked.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#red_delicious' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type23} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Red Delicious</h5>
                  <p>
                  Beautiful, but poor flavor & texture (often mealy).
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#rome_beauty' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type24} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Rome Beauty</h5>
                  <p>
                  Very pretty but very bland. Holds shape when baked but can turn mealy.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
          <HashLink   to='../types#swiss' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type25} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Swiss</h5>
                  <p>
                  Sweet-tart, mild flavor, medium firm, small apple.
                  </p>
               </div>
            </Atropos>
            </HashLink>

            
        <HashLink   to='../types#winesap' smooth  className='types__hashlink'>    <Atropos  activeOffset={10}
        shadowScale={1.05} className="apple__detail" style={{textTransform:'none',fontFamily:'roboto'}}>
               <img src={type26} alt="" data-atropos-offset="5"/>
               <div className="variety__apple__detail">
                  <h5>Winesap</h5>
                  <p>
                  Spicy with some bittersweet notes, making a unique and balanced sweet apple cider.
                  </p>
               </div>
            </Atropos>
            </HashLink>
            

           </div>
           <br />
           <h1>How to pick out good apples</h1>
           <br />
           Apples from the grocery store might be a year old, or even older, thanks to technology and perfect storage conditions. While they are fine to eat, they aren't as crisp and flavorful. They also start to get mealy after a few days, since they degrade a faster pace once leaving their perfectly controlled environment (and they are 8 or 12 months old!).
           <br />
           <br />
           <h1>Storing: in or out of the fridge?</h1>
           <br />
           Apples store really well in home refrigerator temperatures, but their are a few things to keep in mind when putting them in the fridge:
           <br />
           <br />
           <ul>
            <li>They pick up tastes from other things in the fridge easily. Don't put them in the same drawer as something with a strong smell.</li>
            <li>They produce ethylene gas, which ripens things faster. Don't store them with other items you don't want to ripen. Keep them away from vegetables you don't want to wilt (like lettuce) or lose their crisp crunch (like celery).</li>
            <li>They like 90-95% humidity to stay fresh, so set your crisper drawer to the high humidity option.</li>
           </ul>
           <br />
           For apples that are considered "good keepers," a cold cellar works as well. They can keep for several months or longer.
           <br />
           <br />
           Ideally, store each one in an open paper bag. This prevents one bad apple from spoiling the bunch (due to the ethylene gas or a rotting apple). Check apples frequently and remove any that are going bad.
           <br />
           <br />
           Apples that are tart and have thicker skin tend to store longer.
           <br />
           <br />
           <h1>How to prevent apples from browning</h1>
           <br />
           Sometimes you want to keep the flesh of an apple white so it looks appealing on a salad for guests, a snack tray, on a cheese plate, or charcuterie board.
           <br />
           <br />
           You can slow oxidization by removing the apple's exposure to air and countering the enzyme responsible for browning (with things like honey or citric acid). Because of this, many people suggest soaking apple slices in water with added honey or lemon. You can also squeeze lemon juice directly onto the apple slices. These methods all impart a slight flavor (especially the latter), and the results aren't bad, but aren't great either.
           <br />
           <br />
           There's lesser known, better method to slow browning: soaking apples in a salt-water solution. Serious Eats has a full test on the various ways to prevent browning, demonstrating that the salt-water solution performs best. Their article is worth a read and filled with pictures from the tests.
           <br />
           <br />
           They suggest soaking apples for 10 minutes in a salt-water solution, followed by a quick rinse to remove the salt. The apples will then stay white for a couple of hours while sitting out on a cheese or charcuterie board.
           <br />
           <br />
           When using a water-solution to prevent your apples from browning, use the following ratios:
           <br />
           <ul>
            <li>Salt: ½ teaspoon kosher salt per cup of water for 10 minutes</li>
            <li>Honey: ½ Tbs honey per cup of water for no more than 30 minutes</li>
            <li>Lemon juice: ½ -1 Tbs lemon juice per cup of water for no more than 30 minutes</li>
           </ul>












           
           





           
           
            </p>

                </div>

                </div>
  )
}
