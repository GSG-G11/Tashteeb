import React from 'react';
import { PropTypes } from 'prop-types';
import Categories from './Categories';
import './filter.css';

function CategoryFilter({
  handleCateorieCahnge,
  allCategories,
  handleCategorieButtons,
  clearCategories,
}) {
  return (
    <div>
      <h1>Filter By Categorie:</h1>
      <div className="face__Categories">
        <button
          onClick={(e) => {
            handleCategorieButtons(e);
            clearCategories();
          }}
          type="button"
          value="Products"
        >
          All
        </button>
        {allCategories.map((ele) => (
          <button
            onClick={(e) => {
              // setCateoryName(ele.name);
              handleCategorieButtons(e);
            }}
            type="button"
            value={ele.id}
          >
            {ele.name}
          </button>
        ))}
      </div>
      <div className="categories__filter">
        <Categories
          handleCateorieCahnge={handleCateorieCahnge}
          allCategories={allCategories}
        />
      </div>
    </div>
  );
}

CategoryFilter.propTypes = {
  handleCateorieCahnge: PropTypes.func.isRequired,
  allCategories: PropTypes.func.isRequired,
  handleCategorieButtons: PropTypes.func.isRequired,
  clearCategories: PropTypes.func.isRequired,
};
export default CategoryFilter;
