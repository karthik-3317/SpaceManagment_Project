import React, { useState } from 'react'
import { useContext } from "react";
import { useNavigate } from 'react-router-dom'
import './Registration.css'
import axios from "axios"
import { Link } from 'react-router-dom'
import { Context } from "../../utils/context";
import Home from '../Home/Home'
import ReCAPTCHA from 'react-google-recaptcha';
import Products from '../Products/Products';
import Category from '../Home/Category/Category';

const Registration = () => {
  
  let result ="";
  const [un,setUn] =useState(0);
  const [pw,setPw] =useState(0);
  const [login,setLogin] =useState(null);
  const {setHeaderShow}  =useContext(Context);
  const [value1,setValue1] =useState(null);
  const [value2 ,setValue2] = useState(null);
  const [verified,setVerified] = useState(false);
  function onChange(value){
    setVerified(true);
  }

  function Error () {
    if(login === "User Data Not Found" || login === "Incorrect Password"){
      return(
        <div className='incorrect'><h6 id="border">Incorrect Password</h6></div>
        )
      }
    }
    
    const handleSubmit =(e)=>{
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setUn(data.get('username'));
    setPw(data.get('pass')) 
    axios.get("http://localhost:2807/check",{params:{
      username:data.get('username'),
      password:data.get('pass'),
    }}).then((response)=>{
      console.log(response.data);
      setLogin(response.data);
    })
  }
    if(login === "User Data Not Found" || login === "Incorrect Password" || login === null || verified === false)
    {
      return(
    <div className='RegContainer'>
       <main className='RegMain'>
        <form class="form_class" onSubmit={handleSubmit}>
            <div class="form_div">
                <label>Login:</label>
                <input class="field_class" name="username" type="text" placeholder="Enter Your Name" id="username" autofocus autocomplete="off"/>
                <label>Password:</label>
                <input id="pass" class="field_class" name="pass" type="password" placeholder="Enter Your Password" autocomplete="off"/>
               <ReCAPTCHA sitekey='6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI' style={{display:"flex",textAlign:"center",position:"relative",left:"50px"}} onChange={onChange}/>
                <button class="submit_class" type="submit">Enter</button>
                <Error />
            </div>
            <div class="info_div">
                <p>Don't Have An Account? <Link to="/login">Register Here</Link></p>
            </div>
        </form>
    </main>
    <Category/>
    </div>
      )
    }
    else{
      return(
        <div>
          <Home/>
          {setHeaderShow(true)}
        </div>
      )
    }
}

export default Registration
