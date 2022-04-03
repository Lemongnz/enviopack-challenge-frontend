import React from "react";
import { Container } from "./styles";

function CustomDropDown({ onChangeSort }) {
  const handleChange = (event) => {
    onChangeSort(event.target.value);
  };

  return (
    <>
      <Container>
        <select name="cars" id="cars" onChange={handleChange}>
          <option value="default" hidden>
            Seleccionar
          </option>
          <option value="title">Nombre</option>
          <option value="price">Precio</option>
        </select>
      </Container>
    </>
  );
}

export default CustomDropDown;
