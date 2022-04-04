import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Success = styled.div`
  border: 2px solid #e4e4e4;
  min-width: 600px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  text-align: center;
  font-weight: 700;
  box-shadow: 3px 3px 15px 1px #e6e6e6;
  border-radius: 8px;

  & p {
    margin: 0;
  }
`;

export const CustomLink = styled(Link)`
  width: 100%;
  min-height: 30px;
  background-color: #000;
  color: #fff;
  margin-top: 15px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 5px;
`;
