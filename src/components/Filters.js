import React from "react";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <FilterByName handleFilter={props.handleFilter} />
      <FilterBySpecies handleFilter={props.handleFilter} />
    </form>
  );
}
export default Filters;
