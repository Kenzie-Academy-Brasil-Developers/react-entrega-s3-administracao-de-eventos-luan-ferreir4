import styled from "styled-components";

export const Catalog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  width: 92vw;

  padding: 12vh 0 0;
  margin: 0 auto;
  background-color: #f5f5f5;
  box-shadow: 0px 2px 7px #595959;

  h1 {
    font-weight: 300;
    margin-bottom: 0;
  }

  img {
    width: 80vw;
    max-width: 300px;
  }

  @media (min-width: 700px) {
    section {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 200px;
  height: 295px;
  padding: 20px 10px;
  margin: 15px 10px;

  background-color: pink;
  border-radius: 10px;

  img {
    position: absolute;
    bottom: 47%;
    width: 42px;
  }

  h5 {
    position: absolute;
    bottom: 28%;
    margin: 10px 0;
    font-size: 2rem;
    font-weight: 500;
  }

  div {
    position: absolute;
    bottom: 3%;
    display: flex;
    flex-direction: column;
  }

  button {
    padding: 10px 20px;
    margin-bottom: 5px;
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

    p {
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

export const DescpCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  width: 200px;
  height: 360px;
  padding: 5px 10px 20px;
  margin: 15px 10px;

  background-color: pink;
  border-radius: 10px;

  h4 {
    font-weight: 300;
    font-size: 1.5rem;
    margin: 0 0 5px;
  }
  small {
    font-size: 0.95rem;
    margin-bottom: 7px;
    color: #7e7e7e;
  }
  p {
    margin: 0 0 8px;
    font-size: 0.71rem;
  }

  button {
    padding: 5px 20px;
    margin-bottom: 5px;
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
