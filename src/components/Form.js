import React from "react";
import "./Form.css";

const Form = (props) => {
  return (
    <form className="weather-form" onSubmit={props.submit}>
      {/* <form className="weather-form"> */}
      <input
        type="text"
        className="wheather-form__input"
        placeholder="Write city"
        value={props.value}
        onChange={props.change}
      />
      <button className="weather-form__btn">
        <i className="fas fa-search"></i>
      </button>
    </form>
  );
};

export default Form;
