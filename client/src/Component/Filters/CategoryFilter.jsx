import React from 'react';
import Categories from './Categories';

function CategoryFilter() {
  return (
    <div>
      <h1>Filter By Categorie:</h1>
      <div className="face__Categories">
        <button type="button">Accessories</button>
        <button type="button">Drills</button>
        <button type="button">Materials</button>
        <button type="button">Screw Dreivers</button>
        <button type="button">Bases</button>
      </div>
      <div className="categories__filter">
        <Categories />
      </div>
    </div>
  );
}

export default CategoryFilter;
