import React from 'react';
import '../style.css';
import { Image } from 'cloudinary-react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

function SingleCard({ id, img, name }) {
  return (
    <div className="card">
      <div className="card__img__container">
        <Image cloudName="dst1qgbta" publicId={img} />
      </div>
      <div className="Engdetailes">
        <Link to={`/profile/${id}`}>
          <h4>
            <b>{name}</b>
          </h4>
        </Link>
        <p>Architect & Engineer</p>
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
