import styled from "styled-components";

export const Catalogue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 92vw;
  
  padding: 12vh 0  0;
  margin: 0 auto;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 7px #595959;

  h1{
    font-weight: 300;
    margin-bottom: 0;
  }

  img {
    width: 80vw;
    max-width: 300px;
  }
`;

export const Card = styled.div`
  text-align: center;
  background-color: pink;
  width: 220px;
  padding: 20px 8px;
  margin: 15px 0;

  border-radius: 10px;

  img {
    width: 60px;
  }
  h5{
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

  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    width: 50%;
    margin: 20px auto;

    p{
      margin-top: 0;
    }
     
    Button {
      padding: 6px 10px;
      margin-bottom: 10px;
      background-color: #595959;
      color: #f5f5f5;
      border: 1px solid transparent;
      border-radius: 5px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
