import React from 'react'
import '../assets/css/AdmissionHome.css'
import { Link } from 'react-router-dom'
export default function AdmissionHome() {
  return (
    <>
     <>
  <div className='headerAd'>
    <div >
        <div className="logoo">
      <img
        src="https://res.cloudinary.com/dqpyrzzw7/image/upload/v1695536806/logo-removebg-preview_r4gcjf.png"
        alt="logo"
        id="logo"
      />
      </div>
    </div>
    <div id="intro-text">
        <br />
        <br />
        <br />
        <br />
        <br />
      <h1>
        <span id="second-part">Admission Box</span>
      </h1>
      <br />    
    <nav>
      <Link to="/adform"><button >Click Here to Apply</button></Link>
    </nav>
    </div>
  </div>
  {/* <section id="about-us">
  <section class="about-item">
    <i class="fas fa-pencil-alt"></i>
    <h1>Consectetur Risus</h1>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>
  </section>
  <section class="about-item">
    <i class="fas fa-camera-retro"></i>
    <h1>Consectetur Risus</h1>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>
  </section>
  <section class="about-item">
    <i class="fas fa-dollar-sign"></i>
    <h2>Consectetur Risus</h2>
    <p>
      Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.
    </p>
  </section>
</section> */}
  {/* <br /> */}
</>

    </>
  )
}