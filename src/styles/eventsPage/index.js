import styled from "styled-components";

export const EventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 92vw;
  height: 100vh;
  margin: 0 auto;

  img {
    width: 80vw;
    max-width: 300px;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  background-color: #f5f5f5;
  width: 80vw;
  max-width: 800px;
  padding: 20px;
  margin: 18px 0;

  border-radius: 10px;

  img {
    width: 60px;
  }

  h1 {
    margin: 10px 0;
    font-size: 2rem;
    font-weight: 500;
  }
  
  button {
    padding: 10px 20px;
    background-color: #7e7e7e;
    color: #f5f5f5;
    border: 1px solid transparent;
    border-radius: 5px;

    &:hover {
      background-color: transparent;
      color: #7e7e7e;
      border-color: #595959;
    }
  }
`;
