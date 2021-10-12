import styled from "styled-components";

export const EventDrinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 94vw;
  padding: 18px 0;
  margin: 14vh auto 0;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 7px #595959;

  h1 {
    font-weight: 300;
    margin: 0;
    color: #7e7e7e;
  }
  
  hr {
    width: 75vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    section{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      width:98%;
    }
  }
`;

export const EventCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 200px;
  height: 255px;
  padding: 20px 10px;
  margin: 15px 10px;

  background-color: pink;
  box-shadow: 0px 2px 7px #595959;

  img {
    position: absolute;
    bottom: 40%;
    width: 42px;
  }
  

  h5 {
    position: absolute;
    bottom: 20%;
    
    margin: 10px 0;
    
    border-bottom: 1px solid transparent;
    font-size: 2rem;
    font-weight: 500;

  }
  button {
    position: absolute;
    bottom: 5%;
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

  &:hover{
    h5{
      border-bottom: 1px solid #7e7e7e;
    }
  }
`;
