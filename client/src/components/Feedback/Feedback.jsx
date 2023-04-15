import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import toast,{Toaster} from 'react-hot-toast'
import './Feedback.css'
import axios from 'axios';
const Feedback = () => {
  const formik = useFormik({
    initialValues:{
      username:'',
      email:'',
      textarea1:'',
      textarea2:''
    },
    onSubmit: async (e)=>{
      axios.post("http://localhost:2807/feedback",{
        username:e.username,
        email:e.email,
        textarea1:e.textarea1,
        textarea2:e.textarea2
      }).then(()=>{
        console.log("Axios done the job")
      })
     toast.success("Thank You For Your Feedback...")
     setTimeout(()=>{
       navigate('/home')
     },2000)
    }
  });
  const [radioyes,setRadioYes] = useState(null);
  const navigate = useNavigate();
  const [formsubmited,setFormSubmitted] = useState(null);
  return (
    <div>
      <Toaster position='top-center'></Toaster>
        <div className="formpage">
          <form action="" onSubmit={formik.handleSubmit} className='former'>
            <label htmlFor="">Give your valuable feedback..!</label>
            <label htmlFor=""className='bold'>Username</label>
            <input type="text" placeholder='Enter your Username'{...formik.getFieldProps('username')} required/>
            <label htmlFor="" className='bold'>Email</label>
            <input type="text" placeholder='Enter your Email' {...formik.getFieldProps('email')} required/>
            <div className="question1" style={{margintop:"30px"}}>
              <label htmlFor="" className='bold'>How Do You Rate Our Website? </label>
              <div>
              <input type="radio" name='linkbtn'required/>
              <span htmlFor="" style={{marginLeft:"10px"}}>0-3</span>
              </div>
              <div>
              <input type="radio" name='linkbtn'/>
              <span htmlFor="" style={{marginLeft:"10px"}}>4-7</span>
              </div>
              <div>
              <input type="radio" name='linkbtn'/>
              <span htmlFor="" style={{marginLeft:"10px"}}>8-10</span>
              </div>
            </div>
            <div className="question2" style={{margintop:"10px"}}>
              <label htmlFor="" className='bold'>Which Part of our website is attracted you more?</label>
              <div>
              <input type="checkbox" />
              <span htmlFor="">SignUp Security!</span>
              </div>
              <div>
              <input type="checkbox" />
              <span htmlFor="">Interior Designs !</span>
              </div>
              <div>
              <input type="checkbox" />
              <span htmlFor="">Animations for Scrolling !</span>
              </div>
              <div>
              <input type="checkbox" />
              <span htmlFor="">Payment With High Security !</span>
              </div>
            </div>
            <div className="question3" style={{margintop:"10px"}}>
              <label htmlFor="" className='bold'>Do You Find Any Difficulties in our Website </label>
              <div>
              <input type="radio" name='radio2link' onClick={()=>setRadioYes(true)} required/> 
              <span htmlFor=""> Yes </span>
              <input type="radio" name='radio2link' required onClick={()=>setRadioYes(false)}/> <span htmlFor=""> No </span>
             { radioyes && <textarea name="" id="" cols="30" rows="4" placeholder='What Difficulty are your triggered in our website!' required {...formik.getFieldProps('textarea1')} style={{display:"block"}}></textarea>}
              </div>
            </div>
            <div>
            <div className="question4">
              <label htmlFor="" className='bold'>Any Other Suggestions...</label>
              <textarea name="" id="" cols="30" rows="4" placeholder='Write Something...' required style={{display:"block"}} {...formik.getFieldProps('textarea2')}></textarea>
            </div>
            </div>
           
            <input type="submit" className='feedbackbtn'/>
            
          </form>

        </div>
     </div>
  )
}

export default Feedback
