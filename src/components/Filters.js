import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleClick = () => {
    props.resetButton();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterByName handleFilter={props.handleFilter} name={props.name} />
      <FilterBySpecies
        handleFilter={props.handleFilter}
        species={props.species}
      />
      <input type="buton" value="Reset" onClick={handleClick} />
    </form>
  );
}
export default Filters;
