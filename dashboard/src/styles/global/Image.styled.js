import styled from "styled-components";

export const Image = styled.img`
    width: ${(props) => (props.$width)};
    height: ${(props) => (props.$height)};
    border-radius: ${(props) => (props.$borderRadius)};
    margin-left: ${(props) => (props.$openNavbar ? "10px" : "0")};

    @media screen and (max-width:768px){
        margin-left: ${(props) => (props.$responsiveMarginLeft)};
    }
`