import React from "react";

function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "species",
      value: ev.target.value,
    });
  };

  return (
    <label htmlFor="species">
      Species
      <select name="species" id="species" onChange={handleChange}>
        <option value="all">All</option>
        <option value="human">Human</option>
        <option value="alien">Alien</option>
      </select>
    </label>
  );
}
export default FilterBySpecies;
