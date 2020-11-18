import React from 'react';

const Input = (props) => {
  return {
    <>
      <label htmlFor={props.name}> {props.labeName} </label>
      <input type="text"
        className="form-control"
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      </input>
    </>
  }
}

export default Input;
