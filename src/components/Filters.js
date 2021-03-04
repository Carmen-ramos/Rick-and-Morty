import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterByName handleFilter={props.handleFilter} name={props.name} />
      <FilterBySpecies
        handleFilter={props.handleFilter}
        species={props.species}
      />
    </form>
  );
}
export default Filters;
