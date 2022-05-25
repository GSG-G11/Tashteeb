import React from 'react';
import { Statistic, Row, Col } from 'antd';
import { PropTypes } from 'prop-types';
import './style.css';

function Card({ statistics }) {
  return (
    <div className="cardStatistic">
      {Object.keys(statistics).map((item) => (
        <div key={item} className="card">
          <Row>
            <Col>
              <center>
                {statistics[item].icon}
              </center>
              <Statistic title={item} value={statistics[item].count} />
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}

Card.propTypes = {
  statistics: PropTypes.shape({
    user: PropTypes.shape({
      icon: PropTypes.element.isRequired,
      count: PropTypes.number.isRequired,
    }),
    hiringOrder: PropTypes.shape({
      icon: PropTypes.element.isRequired,
      count: PropTypes.number.isRequired,
    }),
    product: PropTypes.shape({
      icon: PropTypes.element.isRequired,
      count: PropTypes.number.isRequired,
    }),
    productOrder: PropTypes.shape({
      icon: PropTypes.element.isRequired,
      count: PropTypes.number.isRequired,
    }),
    order: PropTypes.shape({
      icon: PropTypes.element.isRequired,
      count: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Card;
