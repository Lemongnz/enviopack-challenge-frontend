import React from "react";
import { Container } from "./styles";

function SearchProduct({ onChangeQuery }) {
  const handleChange = (event) => {
    onChangeQuery(event.target.value);
  };

  return (
    <>
      <Container>
        <input onChange={handleChange}></input>
      </Container>
    </>
  );
}

export default SearchProduct;
