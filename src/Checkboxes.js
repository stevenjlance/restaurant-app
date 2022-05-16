import React from "react";

const CheckBoxes = (props) => {
  const handleChange = (event) => {
    // Get selected Borough
    const borough = event.target.name;
    // Update state with borough

    console.log(event.target.name);
    props.updateBorough(event.target.name);
  };
  return (
    <>
      <h2>Pick a Borough</h2>
      <label className="holder">
        Manhattan
        <input type="checkbox" name="Manhattan" onClick={handleChange} />
        <span className="checkmark"></span>
      </label>

      <label className="holder">
        Brooklyn
        <input type="checkbox" name="Brooklyn" onClick={handleChange} />
        <span className="checkmark"></span>
      </label>

      <label className="holder">
        The Bronx
        <input type="checkbox" name="Bronx" onClick={handleChange} />
        <span className="checkmark"></span>
      </label>

      <label className="holder">
        Queens
        <input type="checkbox" name="Queens" onClick={handleChange} />
        <span className="checkmark"></span>
      </label>
      <label className="holder">
        Staten Island
        <input type="checkbox" name="Staten Island" onClick={handleChange} />
        <span className="checkmark"></span>
      </label>
    </>
  );
};

export default CheckBoxes;
