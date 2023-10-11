import React from "react"
import { blog } from "../../../dummydata"
import "./footer.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      
<Link to='/privacy'><i className='fa fa-heart'>Privacy Policy</i></Link>
<br></br>
<Link to='/terms'>
<i class Name='fa-fa-heart'>Terms and condition</i>
        </Link>
    </>
  )
}

export default Footer
