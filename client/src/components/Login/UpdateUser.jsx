import React from 'react'
import axios from 'axios'
import toast,{ Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import './updateUser.css'
const UpdateUser = () => {
    const navigate = useNavigate();
    const formhandler =(event)=>{
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        axios.post('http://localhost:2807/updatecheck',{
            username:formData.get('username'),
            password:formData.get('password'),
        })
        setTimeout(()=>{
            navigate('/home');
        },2000)
        toast.success("User Updated Successfully");
    }
  return (
    <div>
        <Toaster position='top-center'></Toaster>
      <form onSubmit={formhandler} className='formerdetails'>
        <div>
    <label for="field1" className='labelerty'>Username</label>
    <input type="text" id="field1" name="username" placeholder="Enter Your Username" required/>
        </div>
        <div>
    <label for="field2" className='labelerty'>Password</label>
    <input type="text" id="field2" name="password" placeholder="Enter Your Password" required/>
        </div>
        <div>
    <label for="field3" className='labelerty'>Confirm Password</label>
    <input type="text" id="field3" name="confirmpassword" placeholder="Enter Your Confirmation" required/>
        </div>
    <input type="submit" value="Submit"/>
  </form>
    </div>
  )
}

export default UpdateUser
