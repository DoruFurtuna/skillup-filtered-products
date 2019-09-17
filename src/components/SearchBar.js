import React from "react";

const SearchBar = props => (
  <form>
    <input type="text" value={props.userchoice} onChange={props.userChoiceHandler} />
    <label>
      <input type="checkbox" name="checkbox" value={props.checked} onChange={props.checkHandler} />
      Text
    </label>
  </form>
);

export default SearchBar;
