import styled from "styled-components";

export const Header = styled.header`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 12vh;

  background-color: #313131;
  text-align: center;
  box-shadow: 0px 2px 7px #595959;

  img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 88vh;
  padding-top: 12vh;
  background-color: #f5d2d2;
  color: #595959;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90vw;
    margin: 8vh auto 0;
    h3 {
      margin-bottom: 0px;
      font-weight: 400;
      font-size: 4.8rem;
    }
    img {
      width: 80vw;
      background-image: #7e7e7e;
    }
    p {
      font-weight: 100px;
      font-size: 1.5rem;
      margin: 5px 0 0px;
    }
  }
`;
