import React from 'react';
import '../style.css';
import { PropTypes } from 'prop-types';

function SingleCard({ img, name }) {
  return (
    <div className="continerCard">
      <div className="card">
        <img src={img} alt="Avatar" />
        <div className="Engdetailes">
          <h4><b>{name}</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
}
SingleCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SingleCard;
