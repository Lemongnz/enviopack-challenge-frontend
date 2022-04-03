import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .sort {
    max-width: 900px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 40px;
  }

  .custom-drop-down {
    & p {
      margin: 0;
    }
  }
  .pagination {
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: center;
    cursor: pointer;
    margin: 40px auto;

    & li {
      margin: 0 10px;
      padding: 5px 10px;
      background: #000;
      border-radius: 3px;
      color: #fff;
    }
  }
`;
