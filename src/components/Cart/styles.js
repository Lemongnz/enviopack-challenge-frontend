import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1100px;
`;

export const TotalCartPrice = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: 2px solid #e6e6e6;
  width: 1100px;
  padding: 5px;
  min-height: 50px;
  margin: 20px auto;
  box-shadow: 3px 3px 15px 1px #e6e6e6;
  border-radius: 8px;

  & span {
    margin-left: 20px;
    font-size: 18px;
    font-weight: bold;
  }

  & strong {
    margin-right: 20px;
  }
`;

export const ButtonsCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1100px;
  margin: 12px auto 50px auto;

  & button {
    min-height: 30px;
    min-width: 120px;
    background-color: #000;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
