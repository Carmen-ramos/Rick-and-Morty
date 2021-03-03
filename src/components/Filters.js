import React from "react";

function Filters(props) {
  const handleChange = (ev) => {
    props.handleFilter({
      name: "name",
      value: ev.target.value,
    }); //preguntar si mejor hacerlo de la otra forma y coger el key
  };

  return (
    <>
      <label htmlFor="name" id="name">
        <input type="text" name="name" onChange={handleChange} />
      </label>
    </>
  );
}
export default Filters;
