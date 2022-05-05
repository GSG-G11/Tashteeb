import React from 'react'
import SingleCard from './SingleCard'
import './style.css'

const EngCard = () => {

  return (
   <>
   <div className='containerCard'>
       <div className='EngCardTitle'>
       <h2>OUR TEAM</h2>
   <p>We Have A Team Of Amzining Engineers</p>
       </div>
 <div className='cardDetailes'>
<SingleCard/>
<SingleCard/>
<SingleCard/>
 </div>
 <div className='cardBtn'>
 <button className='btn'>JOIN US !</button>
   </div>
   </div>
   </>
  )
}

export default EngCard
