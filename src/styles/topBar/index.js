import styled from "styled-components";

export const Bar = styled.header`
position: fixed;
top: 0;
display: flex;
align-items: center; 
justify-content: space-between;
width: 100vw;
height: 12vh;
background-color: #313131;
text-align: center;
box-shadow: 0px 2px 7px #595959;
img {
  width: 44px;
  height: 40px;
  margin-left: 20px;
}
h1{
  margin: 0;
  color: #f5f5f5;
}
Button {
  padding: 6px 12px;
  margin-right: 20px;
  background-color: #f5d2d2;
  color: #7e7e7e;
  border: 1px solid transparent;
  border-radius: 5px;
  &:hover {
    background-color: #7e7e7e;
    color: #f5d2d2;
    border-color: #f5d2d2;
  }
}
`;