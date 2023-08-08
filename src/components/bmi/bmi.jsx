import React, { useState } from 'react'
import "../bmi/bmi.css"
import bmiApple from "../assets/16.png"

export default function Bmi() {
    const [bmi ,setBmi]= useState(" ");
    const [result, setResult]= useState(false);
    const [healthy ,setHealthy]= useState(false);
    const [ feet, setFeet]=useState(0);
    const [ inch, setInch]=useState(0);
    const [ weight, setWeight]=useState(0);
    const [message, setMessage]=useState("");

    const calc =()=>{
        var height=((parseFloat(feet) * 12) + parseFloat(inch)) * (0.0254);
        var totalBmi=(weight / (height*height));
        
        if(totalBmi>30)
        {
            setMessage("Obesity ")
            setHealthy(false);
            setResult(true)
        }

        else if (totalBmi>24.9  && totalBmi<=29.9)
        {
            setMessage("over weight :(")
            setHealthy(false);
            setResult(true)
        }

        else if(totalBmi>=18.5 && totalBmi<=24.9)
        {
            setMessage("Healthy Weight")
            setHealthy(true);
            setResult(true)
        }

        else if( totalBmi>0 && totalBmi<18.5 )
        {
             setMessage("Under Weight")
             setResult(true)
            setHealthy(false);
        }
    

     else 
     {
        setMessage("Please Enter valid Values")
        setResult(false)
     }
    
    

    if(totalBmi>0)
    {

         setBmi(totalBmi.toFixed(1));

    }
}


  return (
    <div className='components__container' id='bmi'>

        <div className="heading">bmi</div>

        <div >
            <img src={bmiApple} alt="re apple" className='bmi__img' />
        </div>
      <div className="animated__div"></div>
       <div className="bmi__section">
        




       <div className="bmi__left__side">
       <p>curious to know if your weight is healthy or not ?
            calculate your BMI  here!
        </p>
       </div>




       <div className="bmi__right__side">


      <div className="height__area">

      <span>Height</span>
      
<div className='height__inputs'>
        <input type="number" 
        onChange={e=> setFeet(e.target.value)} placeholder='feet'
        className='bmi__inputs' />
      

          <input type="number" 
        onChange={e=> setInch(e.target.value)} placeholder='inches'
        className='bmi__inputs'  />
    
</div>
        </div>  


        <div className="weight__area">

        <span>Weight</span>
        <br/>
        <input type="number" 
          onChange={e=> setWeight(e.target.value)} placeholder="kgs"
          className='bmi__inputs'/>

        </div>
       <div className="result__area" style={{}}>
        <div style={{display: result? 'flex': 'none',border:healthy? '7px solid green' : '7px solid red' }}>{bmi}</div>
        <div style={{color: result? 'whitesmoke' : 'red'}}>{message}</div>
       </div>
       
       <button onClick={calc} className="bmi__btn">calculate</button>

       </div>


       </div>

        </div>
  )
}
