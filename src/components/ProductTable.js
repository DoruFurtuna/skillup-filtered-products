import React from "react";

import ProductRow from "./ProductRow";
import ProductCategoryRow from "./ProductCategoryRow";

export default function ProductTable(props) {
  const { products } = props;
  const groups = [];
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item, index) => {
          if (groups.indexOf(item.category) === -1) {
            groups.push(item.category);
            return (
              <React.Fragment key={index}>
                <ProductCategoryRow category={item.category}></ProductCategoryRow>
                <ProductRow name={item.name} price={item.price}></ProductRow>
              </React.Fragment>
            );
          }
          return <ProductRow name={item.name} price={item.price} key={index}></ProductRow>;
        })}
      </tbody>
    </table>
  );
}
