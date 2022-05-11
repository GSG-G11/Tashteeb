import React from 'react';
import './filter.css';
import { Slider } from 'antd';

function Filter() {
  return (
    <Slider className="slider__filter" range={{ draggableTrack: true }} defaultValue={[0, 100]} />
    // <div className="filter__wrapper">
    //   <input type="number" placeholder="$Min" />
    //   <input type="number" placeholder="$Max" />
    // </div>
  );
}

export default Filter;
