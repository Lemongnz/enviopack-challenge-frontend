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
          <option value="less">más baratos</option>
          <option value="more">más caros</option>
        </select>
      </Container>
    </>
  );
}

export default CustomDropDown;
