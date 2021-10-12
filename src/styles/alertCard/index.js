import styled from "styled-components";

export const AlertCard = styled.div`
  z-index: 1;
  position: fixed;
  /* top: 18%; */
  left: 50%;
  transform: translateX(-50%);

  text-align: center;
  width: 80vw;
  max-width: 400px;
  padding: 10px 0;
  color: #f5f5f5;
  border-radius: 10px;

  animation: hide 0.5s linear 2s 1 forwards;

  @keyframes hide {
    to {
      top: 0;
      opacity: 0;
    }
  }
`;
