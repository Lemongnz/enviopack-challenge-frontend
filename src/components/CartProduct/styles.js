import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1100px;
  border: 2px solid #e6e6e6;
  padding: 5px;
  margin: 3px auto;
  box-shadow: 3px 3px 15px 1px #e6e6e6;

  & img {
    width: 120px;
  }
`;

export const ProductInfo = styled.div`
  background-color: #c1c1c1;
  width: calc(97% - 120px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 0 15px;
  font-size: 18px;

  .price {
    & p {
      margin: 0;
      margin-right: 8px;
      display: inline;
    }
  }
`;
