import React from 'react'
import { useStates } from '../../../services/api_calls/states';
import { useNavigate } from 'react-router-dom';

function Signup() {

  const {setAge,setEmail,setPwd,setConfirmpwd,setPhone,setFirstname,setLastname,SignUp}=useStates();

  const navigate=useNavigate();

  const gotoHomePage=()=>{
    navigate("/user/home")
  }
  return (
    <div>
            <div>
         <div>
          <div className="form">
            <h2>Sign Up</h2>
            <form onSubmit={SignUp}>
              <input type="text"
               name='username'
               placeholder="First name"
               onChange={(e)=>setFirstname(e.target.value)}
               />
              <input type="text"
               name='username'
               placeholder="Last name"
               onChange={(e)=>setLastname(e.target.value)}
               />

              <input type="email" 
              name='email' 
              placeholder="Email" 
              onChange={(e)=>setEmail(e.target.value)}/>
              <input 
              type="password" 
              name='password' 
              placeholder="Password" 
              onChange={(e)=>setPwd(e.target.value)}/>
              <input 
              type="password" 
              name='confirmpassword' 
              placeholder="Confirm Password" 
              onChange={(e)=>setConfirmpwd(e.target.value)}/>
              <input 
              type="number" 
              name='age'
              placeholder='Age'
              onChange={(e)=>setAge(e.target.value)}/>
              <input 
              type="text" 
              name='phone'
              placeholder='Phone Number'
              onChange={(e)=>setPhone(e.target.value)}/>
              <button onClick={()=>{SignUp();gotoHomePage()}} className='btnn'>Sign Up</button>
            </form>
            {/* <p className="message">Already have an Account?<Link to='/login'> <a>Log in</a></Link></p> */}
          </div>
      </div>
    </div>
    </div>
  )
}

export default Signup