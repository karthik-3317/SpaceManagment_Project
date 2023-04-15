import React from 'react'
import './Success.css'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from '../Home/Home'
import { useContext } from 'react'
import { Context } from "../../utils/context";
const Success = () => {
	const {setHeaderShow}  =useContext(Context);
	const change =()=>{
		setHeaderShow(true)
	}
  return (
    <div class="container">
		<div class="success-message">
			<h2>Success!</h2>
			<p>Payment Successful!</p>
		</div>
		<Link to="/home">
			<button className='.buttonn' onClick={change}>BackToHome</button>
			</Link>
	</div>

  )
}

export default Success
