import React from 'react';
import './filter.css';
import { Slider } from 'antd';
import PropTypes from 'prop-types';

function Filter({ handlePriceFilter }) {
  return (
    <Slider
      onChange={(e) => handlePriceFilter(e)}
      max={1000}
      className="slider__filter"
      range={{ draggableTrack: true }}
      defaultValue={[0, 1000]}
    />
  );
}
Filter.propTypes = {
  handlePriceFilter: PropTypes.func.isRequired,
};

export default Filter;
