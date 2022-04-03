import React from "react";
import ProductCard from "../Product";
import { Container } from "./styles";

function ProductsList({ products }) {
  return (
    <>
      <Container>
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Container>
    </>
  );
}

export default ProductsList;
