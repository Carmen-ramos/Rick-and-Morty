import React from "react";

function FilterBySpecies(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "gender",
      value: ev.target.value,
    });
  };

  return (
    <label htmlFor="gender" className="main__form--select stylelabel">
      Gender:
      <select
        className="block"
        name="gender"
        id="gender"
        value={props.gender}
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="unknown">Unknown</option>
      </select>
    </label>
  );
}
export default FilterBySpecies;
