import React from 'react';
import classes from "./search.module.css";
import classNames from "classnames";

const Search = (props) => {
  const {
    value = '',
    onChange,
    children = "Search",
    placeholder = "search..."
  } = props

  const inputClass = classNames({
    [classes.input]: true,
    [classes.filled]: value.length,
  })

  return (
    <label className={classes.label}>
      {children}
      <input
        className={inputClass}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Search;
