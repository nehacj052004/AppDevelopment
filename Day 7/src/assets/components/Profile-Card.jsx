import React from 'react'
import '../css/profile-card.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../services/redux/userSlice'; 

function Profile_Card() {
    const user=useSelector(selectUser);
  return (
    <div>
        <div className='body'>

        
      <div className="box">
  <div className="profile-circle">
    <img src="https://www.shutterstock.com/image-vector/man-icon-vector-250nw-1040084344.jpg" alt="" />
  </div>
  <div className="profile-info">
    <h4>{user?.firstname}  {user?.lastname}</h4>
    <p>Age:<strong>{user?.age}</strong></p>
    
    <h4>{user?.email}</h4>
  </div>
  <br />
  <br />
  <div className="social-icon">
    <div className="fb">
      <svg
        color="#1877F2"
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        viewBox="0 0 512 512"
      >
        <path
          d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"
          fill="currentColor"
        />
      </svg>
    </div>
    <div className="twitt">
      {" "}
      <svg
        color="#1D9BF0"
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
        />
      </svg>
    </div>
    <div className="insta">
      <svg
        color="#FF3129"
        xmlns="http://www.w3.org/2000/svg"
        width={25}
        height={25}
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"
        />
      </svg>
    </div>
    
  </div>
  <div className="btns">
    <button>Edit Profile</button>
  </div>
  
</div></div>

    </div>
  )
}

export default Profile_Card
