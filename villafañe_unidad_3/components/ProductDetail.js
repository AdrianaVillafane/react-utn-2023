// src/components/ProductDetail.js
import React from 'react';
import ProductDetailInfo from './ProductDetailInfo';

const ProductDetail = () => {
  // Datos de ejemplo para el producto
  const productData = {
    name: 'Producto de Ejemplo',
    description: 'Descripción del producto.',
    price: '$99.99',
    sku: 'ABC123',
    quantityAvailable: 50,
  };

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <ProductDetailInfo {...productData} />
    </div>
  );
};

export default ProductDetail;
