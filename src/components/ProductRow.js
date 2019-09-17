import React from "react";

const ProductRow = props => (
  <tr>
    <td>{props.name}</td>
    <td>{props.price}</td>
  </tr>
);

export default ProductRow;
