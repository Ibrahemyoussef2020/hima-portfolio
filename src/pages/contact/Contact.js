import styled  from "styled-components";

export const CONTACT = styled.div`
padding-top:7rem;

& h1{
    text-align:center;
    font-weight:900;
}
`

export const CONTACT_UL = styled.ul`
height: 100%;
padding:3rem 0 0 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;

& li{
    position: relative;
    width: fit-content;
    padding-left: 30px;
    margin-bottom:2rem;
    display:flex;
    gap: 2rem; 
    
    & > span:first-child{
        width:60px;
    };

    &:before{
        content:'';
        position:absolute;
        left:0;
        bottom:0;
        width:10px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid var(--spicealColor);
        border-right: 10px solid transparent;
    }
}`