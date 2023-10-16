import React, { useState } from 'react';
  import '../assets/css/Login.css';
  import {GoogleCircleFilled, AppleFilled, FacebookFilled,GithubFilled} from '@ant-design/icons'
  import { useStates } from './States';
  import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
  import { Toaster } from 'react-hot-toast';


  
  export const Login = () => {
    const [signUpMode, setSignUpMode] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [isValid, setIsValid] = useState(true);
  const toggleSignUpMode = () => {
      setSignUpMode(!signUpMode);
    };
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };
    
    const validateEmail = (input) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@(gmail\.com|yahoo\.com|example\.com|domain\.edu|domain\.in|domain\.co\.in)$/i;

      return emailRegex.test(input);
    };

    const {
      setEmail,
      setFirstname,
      setPassword,
      setLastname,
      setConfirmPassword,
      setAge,
      pwdmatch,
      error,
      pwderror,
      SignIn,
    } = useStates();
    const handleChange = (e) => {
      const inputEmail = e.target.value;
      setEmail(inputEmail);
      setIsValid(validateEmail(inputEmail));
    };

    return (
      <>
<div className="body3">
        <Toaster />
      <div className={`logincontainer ${signUpMode ? 'sign-up-mode' : ''}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <form id='form' className={`sign-in-form ${signUpMode ? '' : 'active'}`} onSubmit={SignIn}>
              <h2 className="title1">Sign in</h2>
              <p className='error-message'>{error}</p>
              <div className="input-field">
                <input type="text" 
                placeholder="Email" 
                name="email" 
                // value={credentials.email}
                onChange={(e)=>setEmail(e.target.value)}
                // onChange={handleLoginChange}
                />
              </div>  

              <div className="input-field">
              <input
                type={showPassword ? 'text' : 'password'} 
                placeholder="Password"
                name="password"
                // value={credentials.password}
                // onChange={handleLoginChange}              
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={togglePasswordVisibility}>
                {showPassword ? <EyeInvisibleOutlined className='eye-icon'/> : <EyeOutlined className='eye-icon'/>}
              </span>
              </div>

              <input type="submit" value="Login" className="btn solid" />
              <p className="social-text">Or Sign in with social platforms</p>
              <div className='social-icons'>
              <GoogleCircleFilled className='google'/>
              <AppleFilled className='apple'/>
              <FacebookFilled className='facebook'/>
              <GithubFilled className='github'/>
              </div>
            </form>

            <form id="form" action="#" className={`sign-up-form ${signUpMode ? 'active' : ''}`} onSubmit={pwdmatch}>
              <h2 className="title1">Sign up</h2>
              <div className="input-field">
                <input type="text" 
                placeholder="First Name" 
                name='firstname'
                onChange={(e)=>setFirstname(e.target.value)}
                />
              </div>
              <div className="input-field">
                <input type="text" 
                placeholder="Last Name" 
                name='lastname'
                onChange={(e)=>setLastname(e.target.value)}
                />
              </div>
              <div className="input-field">
                <input type="email" 
                placeholder="Email" 
                name='email'
                onChange={handleChange}
                style={{ borderColor: isValid ? 'initial' : 'red' }}
                />
                {!isValid && <p style={{ color: 'red' }} className='email-style'>Invalid email address</p>}
              </div>
              <p className='error-message1'>{pwderror}</p>
            
              <div className="input-field">
              <input
                type={showPassword ? 'text' : 'password'} 
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span onClick={togglePasswordVisibility} className='span-size' >
                {showPassword ? <EyeInvisibleOutlined  className='eye-icon'/> : <EyeOutlined  className='eye-icon'/>}
              </span>
              </div>

              <div className="input-field">
                <input type="password" 
                placeholder="Confirm Password" 
                name='confirmPassword'
                onChange={(e)=>setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="input-field">
                <input type="text" 
                placeholder="Age" 
                name='age'
                onChange={(e)=>setAge(e.target.value)}
                />
              </div>
              <input type="submit" className="btn" value="Sign up"  onClick={toggleSignUpMode}/>
              <p className="social-text">Or Sign up with social platforms</p>
              {/* Social media icons */}
              <div className='social-icons'>
              <GoogleCircleFilled className='google'/>
              <AppleFilled className='apple'/>
              <FacebookFilled className='facebook'/>
              <GithubFilled className='github'/>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content1">
              <h3>New here ?</h3>
              <p>
                Welcome! Make admission procedure easy with our website, proceed to create an account
              </p>
              <button className="btn transparent" id="sign-up-btn" onClick={toggleSignUpMode}>
                Sign up
              </button>
            </div>
            <img src="https://i.ibb.co/6HXL6q1/Privacy-policy-rafiki.png" className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content1">
              <h3>One of us ?</h3>
              <p>
                Sign In to view our webApp
              </p>
              <button className="btn transparent" id="sign-in-btn" onClick={toggleSignUpMode}>
                Sign in
              </button>
            </div>
            <img src="https://i.ibb.co/nP8H853/Mobile-login-rafiki.png" className="image" alt="" />
          </div>
        </div>
      </div>
      </div>

      </>
    )
  }
  
// import React from 'react'

// function Signin() {
//   return (
//     <div>Signin</div>
//   )
// }

// export default Signin