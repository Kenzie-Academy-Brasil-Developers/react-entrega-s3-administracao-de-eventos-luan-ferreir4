import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    button{
        cursor: pointer;
        font-family: 'Lato', sans-serif;
        &:hover{
            transition: 0.4s;
        }
    }
`;