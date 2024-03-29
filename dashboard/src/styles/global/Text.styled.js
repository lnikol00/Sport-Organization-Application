import styled from "styled-components";

export const Title = styled.h1`
    font-size: ${(props) => (props.$fontSize)};
    color: ${(props) => (props.theme.color)};
    display: ${(props) => (props.$openNavbar ? "block" : "none")};

    @media screen and (max-width:768px){
        display:${(props) => (props.$responsiveTitle)};
    }
`

export const Paragraph = styled.p`
    font-size: ${(props) => (props.$fontSize)};
    color: ${(props) => (props.theme.color)};
`

export const Icon = styled.span`
    font-size: ${(props) => (props.$fontSize)};
    padding: ${(props) => (props.$padding)};
    color: ${(props) => (props.theme.color)};
    border: ${(props) => (props.theme.color)};
    border-radius: ${(props) => (props.$borderRadius)};
`

export const Quantity = styled.span`
    font-size: ${(props) => (props.$fontSize)};
    color: ${(props) => (props.theme.color)};
`

export const Text = styled.span`
    color: #fff;
    font-size: ${(props) => (props.$fontSize)}
`