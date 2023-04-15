import React from 'react'
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';

import Features from './components/features/features'
import Types from './components/types/types'
import Bmi from './components/bmi/bmi'
import Blog from './components/blog/blog'
import Blog1 from "./components/blog/blogs/blog1"
import Blog2 from "./components/blog/blogs/blog2"
import Blog3 from "./components/blog/blogs/blog3"
import Blog4 from "./components/blog/blogs/blog4"
import Blog5 from "./components/blog/blogs/blog5"
import Blog6 from "./components/blog/blogs/blog6"
import Recipes from './components/recipes/recipes';
import Aboutus from './components/about/aboutus';
import AppleSeason from './components/features/features/feature1/appleSeason';
import Benifits from './components/features/features/feature2/benifits';
import Diets from './components/features/features/feature3/diets';
import Type from './components/types/types/type';
import Recipe from './components/recipes/recipes/recipe';
export default function App() {
  return (
    <>

      <BrowserRouter>
        <div className='components__container'>

          <Routes>
            <Route path="/" element={<Home />} activeStyle={{ color: 'red' }} />
            <Route exact path="about" element={<Aboutus />} />
            <Route exact path="apple_recipes" element={<Recipe />} />
            <Route exact path="recipes" element={<Recipes />} />
            <Route exact path="feature_1" element={<AppleSeason />} />
            <Route exact path="feature_2" element={<Benifits />} />
            <Route exact path="feature_3" element={<Diets />} />
            <Route exact path="types" element={<Type />} />
            <Route path="bmi" element={<Bmi />} />
            <Route exact path="blogs" element={<Blog />} />
            <Route path="blog1" element={<Blog1 />} />
            <Route path="blog2" element={<Blog2 />} />
            <Route path="blog3" element={<Blog3 />} />
            <Route path="blog4" element={<Blog4 />} />
            <Route path="blog5" element={<Blog5 />} />
            <Route path="blog6" element={<Blog6 />} />
          </Routes>


        </div>

      </BrowserRouter>
    </>
  )
}
