import React from "react";

function FilterByName(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      key: "name",
      value: ev.target.value,
    }); //preguntar si mejor hacerlo de la otra forma y coger el key
  };

  return (
    <label htmlFor="name" id="name" className="main__form--inputText">
      Introduce your favourite character name:
      <input
        type="text"
        name="name"
        value={props.name}
        onChange={handleChange}
      />
    </label>
  );
}
export default FilterByName;
