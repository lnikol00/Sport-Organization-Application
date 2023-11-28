import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Quicksand', sans-serif;
    }
`

export const darkTheme = {
    backgroundColor: "rgb(48, 48, 48)",
    buttonColor: "black",
    color: "lightgray",
    hover: "black",
    body: "rgb(95, 95, 95)",
    link: "white"
}

export const lightTheme = {
    backgroundColor: "yellow",
    buttonColor: "lightgray",
    color: "black",
    hover: "lightgray",
    body: "white",
    link: "blue",
}