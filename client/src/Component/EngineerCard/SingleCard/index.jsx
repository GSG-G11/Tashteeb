import React from 'react';
import '../style.css';

function SingleCard() {
  return (
    <div>
      <div className="card">
        <img src="http://themesflat.com/html/nah/images/member/1t1.png" alt="Avatar" />
        <div className="Engdetailes">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
