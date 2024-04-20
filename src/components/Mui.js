import styled from "styled-components";

 const MuiLogo_style = styled.div`
    position:relative;
    left: -3px;
    font-size: 19px;
    font-family: "Chakra Petch", sans-serif;
    font-weight:700;
    font-style: normal;

    &::before{
        content: 'U';
        position: absolute;
        top: 15px;
        left:7px;
        transform: rotateZ(36deg);
        font-size:1rem;
        font-family:inherit;
        color:inherit;
    }
    &::after{
    content: 'i';
    position: absolute;
    top: 6px;
    left: 17px;
    font-weight: 700;
    font-size: 17px;
    font-family: inherit;
    color: inherit;
    text-transform: lowercase;
    }

`

export const MuiLogo = ()=>{
    return <MuiLogo_style>M</MuiLogo_style>
}