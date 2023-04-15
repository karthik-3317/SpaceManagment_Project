import React, { useState } from 'react'
import toast from "react-hot-toast";
// import {bcrypt} from 'bcrypt'
import { Toaster } from 'react-hot-toast';
import './Login.css';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  const [username,setUserName] =useState(null);
  const [password,setPassword] =useState(null);
  const [email,setEmail] =useState(null);
  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const pass1 = data.get('password')
    const pass2 =data.get('repeat-password')
    const checkPasswordValidity = (value) => {
        const isNonWhiteSpace = /^\S*$/;
        if (!isNonWhiteSpace.test(value)) {
          toast.error("Password must not contain Whitespaces.")
          return false
        }
      
        const isContainsUppercase = /^(?=.*[A-Z]).*$/;
        if (!isContainsUppercase.test(value)) {
          toast.error("Password must have at least one Uppercase Character.")
          return false
        }
      
        const isContainsLowercase = /^(?=.*[a-z]).*$/;
        if (!isContainsLowercase.test(value)) {
          toast.error("Password must have at least one Lowercase Character.")
          
          return false
        }
      
        const isContainsNumber = /^(?=.*[0-9]).*$/;
        if (!isContainsNumber.test(value)) {
          toast.error("Password must contain at least one Digit.");
      
          return false
        }
      
        const isContainsSymbol =
          /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
        if (!isContainsSymbol.test(value)) {
          toast.error("Password must contain at least one Special Symbol.");
          return false
        }
      
        const isValidLength = /^.{10,16}$/;
        if (!isValidLength.test(value)) {
          toast.error("Password must be 10-16 Characters Long.");
          return false
        }
        return true;
      }
  const cat = checkPasswordValidity(pass1);
    if((cat === true) && (pass1 == pass2)){
        // axios.post('http://localhost:2807/registration2',{
        //     username:data.get('username'),
        //     password:data.get('password'),
        // }).then((response)=>{
        //     console.log(response.data);
        // })

        axios.post('http://localhost:2807/registration',{
            username:data.get('username'),
            email:data.get('email'),
            password:data.get('password'),              
        }).then((response)=>{
          toast.success("Registerd Successfully");
        }).catch(error=>{toast.error("User Already Exists Use Another")
        })
        
    }
    else if(pass1 !==pass2){
        toast.error("Passwords Are Not Same");
    }
}
  const styleremover = ()=>{
    document.querySelector(".usernamerg").value="";
    document.querySelector(".emailrg").value="";
    document.querySelector(".passwordrg").value="";
    document.querySelector(".repeatpasswordrg").value="";
  }
  return (
    <div className='oreo'>
  <div className="containerer">
  <Toaster position='top-center' reverseOrder={false}></Toaster>
    <h2 className='Loginh2'>Registration Form</h2>
    <form action="/register" method="post" onSubmit={handleSubmit}>
      <div className="imgcontainer">
        <img src="http://www.clker.com/cliparts/h/G/X/d/N/M/orange-button-register-here-hi.png" alt="Avatar" class="avatar" />
      </div>
      <label for="username" ><b>Username</b></label>
      <input type="text" className='usernamerg' placeholder="Enter Username" name="username" required />

      <label for="email"><b>Email</b></label>
      <input type="text" className='emailrg'  placeholder="Enter Email" name="email" required />

      <label for="password"><b>Password</b></label>
      <input type="password" className='passwordrg'  placeholder="Enter Password" name="password" required />
      <label for="password-repeat"><b>Repeat Password</b></label>
      <input type="password" className='repeatpasswordrg'  placeholder="Repeat Password" name="repeat-password" required />
      <button type="submit">Register</button>
      <div className="buttons">

      <button type="button" class="cancelbtn" onClick={styleremover}>Cancel</button>

      <Link to="/">
      <button type="button" class="cancelbtn" style={{backgroundColor:"rgba(0,200,0,1)",float:"right"}}>Login Here</button>
      </Link>
      </div>
    </form>
    </div>
  </div>
    )
}

export default Login
