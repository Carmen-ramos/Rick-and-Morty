import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
import FilterByGender from "./FilterByGender";
import FilterByOrigin from "./FilterByOrigin";
import PropTypes from "prop-types";

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleClick = () => {
    props.resetButton();
  };

  return (
    <form onSubmit={handleSubmit} className="main__form">
      <FilterByName handleFilter={props.handleFilter} name={props.name} />
      <div className="main__form--container">
        <FilterBySpecies
          handleFilter={props.handleFilter}
          species={props.species}
        />
        <FilterByGender
          handleFilter={props.handleFilter}
          gender={props.gender}
        />
      </div>
      <FilterByOrigin
        handleFilter={props.handleFilter}
        origin={props.origin}
        getOrigin={props.getOrigin}
      />
      <input
        type="button"
        value="Reset"
        onClick={handleClick}
        className="main__form--reset"
      />
    </form>
  );
}

Filters.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.array,
  getOrigin: PropTypes.array,
  species: PropTypes.string,
  gender: PropTypes.string,
  handleFilter: PropTypes.func,
};
export default Filters;
