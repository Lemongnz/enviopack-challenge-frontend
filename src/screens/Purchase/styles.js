import styled from "styled-components";

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

  & button {
    width: 100%;
    min-height: 30px;
    background-color: #000;
    color: #fff;
    margin-top: 15px;
  }

  & p {
    margin: 0;
  }
`;
