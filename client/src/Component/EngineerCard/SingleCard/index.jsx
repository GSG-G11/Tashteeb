import React from 'react';
import '../style.css';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function SingleCard({ id, img, name }) {
  // console.log(id);
  return (
    <div className="continerCard">
      <div className="card">
        <img src={img} alt="Avatar" />
        <div className="Engdetailes">
          <Link to={`/profile/${id}`}>
            <h4><b>{name}</b></h4>
          </Link>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
}
SingleCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SingleCard;
