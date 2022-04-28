import React from 'react'
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
 <div class="card">
  <img src="http://themesflat.com/html/nah/images/member/1t1.png" alt="Avatar" />
  <div className='Engdetailes'>
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
<div class="card">
  <img src="http://themesflat.com/html/nah/images/member/1t1.png" alt="Avatar" />
  <div className='Engdetailes'>
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
<div class="card">
  <img src="http://themesflat.com/html/nah/images/member/1t1.png" alt="Avatar" />
  <div className='Engdetailes'>
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
 </div>
 <div className='cardBtn'>
 <button className='btn'>JOIN US !</button>
   </div>
   </div>
   </>
  )
}

export default EngCard
