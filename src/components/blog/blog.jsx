import React from 'react'
import "../blog/blog.css"
import blog1 from "../assets/blog1.jpg"
import blog2 from "../assets/blog2.jpg"
import blog3 from "../assets/blog3.jpg"
import blog4 from "../assets/blog4.jpg"
import blog5 from "../assets/blog5.jpg"
import blog6 from "../assets/blog6.jpg"
import { HashLink } from "react-router-hash-link";

import {BsFacebook, BsInstagram, BsYoutube} from "react-icons/bs"

export default function Blog() {
  return (
    <div className='component__container' id='blogs'>
    <div className="heading">Blogs</div>


    <div className="blog__section">


        <div className="blog">
            <img src={blog1} alt="" className='blog__img' />
            <div className="blog__detail">
              <h3>Seed Cycling Benefits for Hormone Balance and PCOS</h3>
              <p>Polycystic ovary syndrome, known as PCOS, is one of the most common hormonal disorders in...</p>
                <HashLink smooth to='/blog1#seed_cycling_benifits' className="read__more__btn">read more</HashLink>
            </div>
        </div>

        
        <div className="blog">
            <img src={blog2} alt="" className='blog__img' />
            <div className="blog__detail">
            <h3>Gut Healing Guide</h3>
              <p>Gastrointestinal (GI) issues can be complex and multi-faceted. We always recommend working with a trusted healthcare professional to...</p>
                 <HashLink smooth to='/blog2#gut_healing_guide' className="read__more__btn">read more</HashLink>
            </div>
        </div>
       
        
        <div className="blog">
            <img src={blog3} alt="" className='blog__img' />
            <div className="blog__detail">
            <h3> Making non Alchoholic Apple Cider</h3>
              <p>If you are looking for a warming and quick non-alcoholic apple cider recipe you will love this one. It is a semi warm drink using the blender...</p>
              <HashLink smooth to='/blog3#making_non_alchoholic_apple_cider'className="read__more__btn">read more</HashLink>
            </div>
        </div>

        
        <div className="blog">
            <img src={blog4} alt="" className='blog__img' />
            <div className="blog__detail">
            <h3>10 Tips for Vegan Baking</h3>
              <p>What if I told you that you could make homemade bagels in 30 minutes that require no boiling and no yeast?...</p>
                 <HashLink smooth to='/blog4#10_tips_for_vegan_baking' className="read__more__btn">read more</HashLink>
            </div>
        </div>

        
        <div className="blog">
            <img src={blog5} alt="" className='blog__img' />
            <div className="blog__detail">
            <h3>Apple Nachos</h3>
              <p>Apple nachos are a fun treat for kids and adults alike. With a creamy peanut butter drizzle, chocolate chips in every bite and...</p>
              <HashLink smooth to='/blog5#apple_nachos'className="read__more__btn">read more</HashLink>
            </div>
        </div>

        
        <div className="blog">
            <img src={blog6} alt="" className='blog__img' />
            <div className="blog__detail">
                  <h3>Healthy Holiday Treats</h3>
                  <p>Welcome back for another week! We hope you had a truly lovely Thanksgiving surrounded by loved ones, and that you were able...</p>
                  <HashLink smooth to='/blog6#healthy_holiday_treats' className="read__more__btn">Read more</HashLink>
            </div>
        </div>
        




    </div>

    <div className="footer__links">
      

    <a href='https://www.faceboook.com/searchedforsameer' target='_blank'> <BsFacebook /></a>
                   <a href='https://www.instagram.com/i_am_sam_eer' target='_blank'> <BsInstagram /></a>
                   <a href='https://youtube.com/@ehsaanalistudio' target='_blank'>   <BsYoutube /></a>
    </div>
   


</div>

   
  )
}
