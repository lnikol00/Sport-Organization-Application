import styled from "styled-components";

export const DashboardContainer = styled.div`
    padding: 30px 50px;

    h1{
        display:block
    }
`

export const Stats = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:30px;
    padding: 20px 0;

    @media screen and (max-width: 900px) {
        flex-direction: column;
        gap: 20px;
    }

`

export const Container = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:${(props) => (props.$alignItems)};
    flex-direction:${(props) => (props.$flexDirection)};
    gap: 15px;
    border:1px solid ${(props) => (props.theme.color)};
    width:${(props) => (props.$width)};
    padding: 15px;

    @media screen and (max-width: 1200px) {
        width:100%;
    }
`

export const Wrapper = styled.div`

`

export const Charts = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    gap:15px;
    padding: 0 0 20px;


    @media screen and (max-width: 1200px) {
        flex-direction: column;
    }
`

export const Orders = styled.div`
    border:1px solid ${(props) => (props.theme.color)};
    width:100%;
    padding: 15px;
`