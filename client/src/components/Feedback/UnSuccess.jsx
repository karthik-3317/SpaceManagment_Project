import React from 'react'
import './UnSuccess.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Context } from "../../utils/context";
const UnSuccess = () => {
	const {setHeaderShow}  =useContext(Context);
	const change =()=>{
		setHeaderShow(true)
	}
  return (
    <div class="container">
		<div class="unsuccess-message">
			<h2>UnSuccessful</h2>
			<p>Payment UnSuccessful!</p>
		</div>
		<Link to="/home">
			<button className='.buttonn' onClick={change}>BackToHome</button>
			</Link>
	</div>

  )
}

export default UnSuccess
