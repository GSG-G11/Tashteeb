import React from 'react'
import {Link} from "react-router-dom"
import './style.css'

const EnginnerBanner = () => {
  return (
   <>
   <div className="hero-image">
<div className='engineerDate'>
  <div className='dataEng'>
  <div><h1>Engineers Info</h1></div>
<div className='engineerLinks'>
<Link to={'/'}>Home / </Link>
<Link to={'/'}>Pages / </Link>
<Link to={'/'}>Shop</Link>
</div>
</div>
   </div>
   </div>
   </>
  )
}

export default EnginnerBanner