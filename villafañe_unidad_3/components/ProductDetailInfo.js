// src/components/ProductDetailInfo.js
import React from 'react';

const ProductDetailInfo = ({ name, description, price, sku, quantityAvailable }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Precio: {price}</p>
      <p>SKU: {sku}</p>
      <p>Cantidad disponible: {quantityAvailable}</p>
    </div>
  );
};

export default ProductDetailInfo;
