import React from "react";

function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "species",
      value: ev.target.value,
    });
  };

  return (
    <label htmlFor="species" className="main__form--select stylelabel">
      Species:
      <select
        className="block"
        name="species"
        id="species"
        value={props.species}
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="human">Human</option>
        <option value="Alien">Alien</option>
      </select>
    </label>
  );
}
export default FilterBySpecies;
