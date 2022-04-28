import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'
import notFound from './notFound.svg'
const NotFound = () => {
  return (
    <div>
          <div className='notFound'>
        <img className='imgNotFound' src={notFound} alt="not found"  />
        <h2>Page Not Found</h2>
        <Link to='/' className='backToHome'>Back To Home</Link>
      </div>
    </div>
  )
}

export default NotFound
