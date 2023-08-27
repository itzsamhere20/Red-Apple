import React , {useState} from 'react'
import "../blogs/blogs.css"
import Navbar from '../../navbar/navbar'
import blog__2 from "../../assets/blog2.jpg"
export default function Blog2() {
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

    
<div className='blogs__container' id='gut_healing_guide'>
<Navbar />
        <div className="blog__heading__section">
            <img src={blog__2} alt=" seeds image" className='blog__heading__img' />
               
                  <div className="blog__metadata">
                  <div className="blog__heading">
                  Gut Healing Guide
                    </div>
                    <div className="date">
                     <div className="blog__writter">Rita De Freitas</div>
                     <div className="blog__date">04 - June - 2021</div>
                     </div>
                </div>
        </div>

        <div className="blog__paragraph__section" style={{filter: scrolled? 'none': 'blur(3px)',transition:'0.3s all linear'}}>  
            <h1>
            GUT HEALING GUIDE
            </h1>
            <p>
            Gastrointestinal (GI) issues can be complex and multi-faceted. We always recommend working with a trusted healthcare professional to put a plan in place that suits your individual needs. This guide will hopefully help you understand the basics of gut healing and give you a blueprint that you and your healthcare team can personalize for you!
            <br/>
            <br />
            <h2> WHAT IS LEAKY GUT?</h2>
            <br />
            Many functional GI disorders may be due in part to increased intestinal permeability, commonly called leaky gut. Think of your intestinal lining as having very small holes that allow completely digested food particles through. Sometimes, the lining of our intestines becomes too porous, allowing undigested food, toxins or bacteria into circulation. These are tagged as intruders by the immune system and a systemic inflammatory cascade may occur.  The good news is that we can do many things to re-seal the gut lining and stop the inflammation in its tracks.
            <br />
            <br />
            <h2>WHAT CAUSES LEAKY GUT?</h2>
            <br />
            <ul>
                <li>Overuse of antibiotics</li>
                <li>Poor dietary choices (processed foods high in sugar and low in
fiber)</li>
                <li>Certain medications like NSAIDs or acid reducing drugs</li>
                <li>Environmental toxins</li>
                <li>Increased intestinal permeability (aka leaky gut)</li>
                <li>Food sensitivities</li>
            </ul>
            <br />
            <br />
            <h2>THE 5 APPROACHS TO GUT HEALING</h2>
            <br />
            <span >REMOVE</span>
            <br />
            The goal of this step is to remove triggers that cause issues and/or leaky gut.  This could be bacterial overgrowth or yeast infections, parasites, food sensitivities or SIBO.  Testing may be necessary.  Some of the tests we use in practice test for food sensitivities, micronutrient deficiencies and dysbiosis (imbalance in the microbiome).
            <br />
            <br />
            <span >REPLACE</span>
            <br />
            Digestive support is crucial at this stage to ensure your food is being broken down properly.  A good quality enzyme may help.  Digestive support may include ox bile and lipase for fat digestion, betaine hcl and proteolytic enzymes for protein digestion and amylase, sucrase and lactase for carbohydrate digestion.  If food is broken down properly, large molecules are less likely to cross through the intestines into circulation and cause a food sensitivity reaction.
            <br />
            <br />
            <span >RECONDITION</span>
            <br />
            The use of a spore based probiotic and targeted pre-biotics help to restore balance of the microbiome, calm inflammation and keep your intestinal lining intact.  It is helpful to think of prebiotics as food for the probiotic.  Probiotics help to crowd out pathogenic strains that can damage the intestinal wall.  They produce Vitamins like B12 and ferment prebiotic fiber into short chain fatty acids (SCFAS) that serve as fuel for the cells in our colon.  We use professional grade Pro- and Prebiotics in our practice from Microbiome Labs that have clinical research to back up their use.  Many probiotics on the market today may not be doing much as most of the cultures die before they even enter the large intestine.  Spore-based probiotics have been shown to withstand the harsh environments of the digestive tract to stay intact until they reach the large intestine to help recondition the intestinal lining and protect from damage.
            <br />
            <br />
            <span >REPAIR</span>
            <br />
            In this stage, we want to restore the mucosal lining of the GI tract to reduce inflammation and the effects of “leaky gut”.  Nutrients like l-glutamine, zinc carnosine, vitamin A,  Fish oil,  Vitamin C, Marshmallow Root and/or licorice can all play a role.  The intestinal tract has a mucosal layer that helps to repel irritants and pathogens that cause damage.  These nutrients work to restore that lining, fuel the cells and keep food, toxins and bacteria where they belong–IN YOUR GUT!
            <br />
            <br />
            <span >REBALANCE</span>
            <br />
            Supplements are helpful, but learning how to manage stress and focus on positive are key in remaining healthy in the long run.  Stress hormones can cause dysbiosis and leaky gut.  So get your Zen on!  Prayer meditation, yoga, being outdoors, deep breathing, journaling , etc. all work wonders!
            <br />
            <br />
            <span style={{fontStyle:"italic"}}>Diet plays a large role in preventing and treating a leaky gut. </span>
            <br />
            <h2>FOODS TO EAT</h2>
            <br />
            <ul>
                <li>
                SPROUTED, ORGANIC and NON-GMO Gluten Free Grains:  Rice, quinoa, millet, amaranth and Oats
                </li>
                <li>PREBIOTIC FOODS:  Asparagus, onions, garlic, leeks, artichokes, oats, flax, bananas</li>
                <li>FERMENTED FOODS:  Yogurt, Kefir, kimchi, kombucha</li>
                <li>FATS & OILS:   Grass-fed butter, Ghee, Coconut oil, Avocado, olive oil</li>
                <li>DAIRY ALTERNATIVES:  Coconut, almond or cashew milk and Yogurt</li>
            </ul>
            <br />
            <h2>FOODS TO AVOID</h2>
            <br />
            <ul>
                <li>
                GLUTEN CONTAINING GRAINS/FOODS:  Wheat, barley, rye, kamut, granolas, cereals, pasta, crackers, pretzels, breads, etc.
                </li>
                <li>CONDIMENTS:  Soybean oil/canola/sunflower oil based dressings, mayonnaise and ketchups with added sugars or made with High-fructose corn syrup, soy sauce (try tamari or liquid aminos)</li>
                <li>PROCESSED, CURED MEATS:  Pepperoni, lunch meats, sausage, bacon with added nitrates/nitrites.</li>
                <li>FATS & OILS:   Vegetable oils (soybean/safflower/sunflower/canola/corn), avoid all hydrogenated oils.</li>
                <li>DAIRY:   Conventionally raised cow’s milk and cheese, ice cream, half n’ half (sugar free or sweetened).</li>
            </ul>
            <br />
            <h2 >Supplements for Gut Health</h2>
            <br />
            While everyone has individual needs, below are some of the most important gut healing supplements that might help you to repair and support a leaky gut:
            <br />
            <br />
            <ul>
                <li>PROBIOTICS:  Probiotics are live, active cultures that provide a benefit to us.  Ensuring that we have enough beneficial “bugs” in our microbiome helps restore balance to the GI tract and reduce inflammation.</li>
                <li>PREBIOTICS:  As mentioned, prebiotics serve as food for the probiotics to keep them alive and healthy.  Prebiotics are a
type of fiber fermented by bacteria into short chain fatty acids (SCFAs).  SCFAs act as fuel for the cells in our colon, helping to reduce risk of colon cancer and keep the lining of our intestines intact.</li>
                <li>L-GLUTAMINE:  This amino acid is critical for healing leaky gut. It helps protect the lining of the intestine from damage and repels irritants that can cause inflammation.</li>
                <li>DIGESTIVE ENZYMES:  Digestive enzymes help break down fats, carbs and proteins into molecules that are absorbed through the intestinal wall. Supplemental enzymes may be necessary if we aren’t making enough due to age, disease, or certain medications</li>
            </ul>
            <br />
            <h2 >Gut Healing Recipes</h2>
            <br />
            <span >Healing Bone Broth</span>
            <br />
            <ul>
                <li>CHICKEN CARCASS OR 2 LBS BONES FROM BEEF, OX, VENISON, LAMB, FISH OROTHER ANIMAL MEATS (CAN HAVE SOME MEAT ON THEM TO HELP WITH FLAVOR).</li>
                <li>2 TBSP APPLE CIDER VINEGAR (HELPS TO DRAW MINERALS FROM BONES).</li>
                <li>2 CARROTS, WASHED AND CUT IN HALF (NO NEED TO PEEL).</li>
                <li>3 STALKS CELERY, WASHED AND CUT IN HALF.</li>
                <li>2 WHOLE GARLIC CLOVES, SKIN REMOVED.</li>
                <li>1 ONION, SKIN REMOVED AND CHOPPED IN HALF.</li>
                <li>8 OZ FRESH OR DRIED MUSHROOMS.</li>
                <li>2 TSP TURMERIC.</li>
                <li>¼ CUP VARIETY OF FRESH HERBS (I.E. PARSLEY, ROSEMARY, SAGE, THYME, ETC).</li>

            </ul>
            <br />
            <br />
            YOU WOULD LIKE MORE FLAVOR, AS AN OPTION YOU CAN ROAST BONES IN OVENFOR 30 MINUTES AT 350 DEGREES. OTHERWISE, COMBINE ALL INGREDIENTS IN LARGE STOCK POT WITH 10 CUPS WATER. BRING TO A BOIL AND SIMMER ON LOW FOR 1-2 HOURS THEN TRANSFER TO A CROCK POT AND ALLOW TO COOK FOR AT LEAST 8 HOURS AND UP TO 24 HOURS.
            <br />
            <br />
            YOU CAN ALSO MAKE IT YOUR INSTAPOT  WHICH REQUIRES ONLY 3 HOURS.  IF COOKING FISH BONES, ONLY COOK FOR A COUPLE HOURS. AFTER COOKING, STRAIN TO REMOVE ALL VEGGIES, HERBS AND BONES. USING A VERY FINE MESH STRAINER, POUR BROTH THROUGH AGAIN TO REMOVE ANY EXCESS INGREDIENTS.   AS YOU STORE IN THE FRIDGE, THE BROTH WILL FORM A GEL OF FAT AT THE TOP, WHICH IS HEALTHY AND GREAT FOR COOKING OR YOU CAN KEEP IN BROTH. ENJOY ON ITS OWN IN A CUP OR IN SOUPS, CASSEROLES OR TO COOK GRAINS. WILL KEEP FOR 7 DAYS IN THE FRIDGE OR UP TO 6 MONTHS IN THE FREEZER.
            <br />
            <br />
            Written by Rita De Fretias.



        


            




            </p>

            </div>
        </div>
    
  )
}