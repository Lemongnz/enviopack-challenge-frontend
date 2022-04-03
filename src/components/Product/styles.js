import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #000;
  max-width: 200px;
  padding: 1rem 2rem;
  color: #000;
  margin: 0 auto;
`;

export const ImgContainer = styled.div`
  width: 100%;
  & img {
    width: 200px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 500;
`;

export const AddToCart = styled.button`
  width: 100%;
  height: 2rem;
  border: none;
  background: #000;
  color: #fff;
  margin-top: 1rem;
  cursor: pointer;
`;
