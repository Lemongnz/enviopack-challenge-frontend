import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #28262e;
  color: #fff;
  height: 60px;
  padding: 0 20px;
`;

export const LeftContainer = styled.div`
  font-weight: 700;
`;

export const RightContainer = styled.div`
  display: flex;

  & div {
    margin-right: 20px;
  }
  & span {
    font-weight: 700;
  }
`;

export const CustomLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`;
