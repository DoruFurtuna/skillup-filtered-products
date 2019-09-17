import React from "react";

import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { products } from "../constants";

export default class FilterableProductTable extends React.Component {
  state = {
    userchoice: "",
    checked: false
  };

  userChoiceHandler = event => {
    this.setState({ userchoice: event.target.value });
  };

  checkHandler = event => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <div>
        <SearchBar
          userchoice={this.state.userchoice}
          checked={this.state.checked}
          userChoiceHandler={this.userChoiceHandler}
          rcheckHandler={this.checkHandler}
        ></SearchBar>
        <ProductTable
          products={products.filter(item => {
            const name = item.name.toLowerCase();
            const userChoice = this.state.userchoice.toLowerCase();

            return name.indexOf(userChoice) > -1;
          })}
        ></ProductTable>
      </div>
    );
  }
}
