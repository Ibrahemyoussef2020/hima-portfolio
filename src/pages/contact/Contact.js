import styled  from "styled-components";

export const CONTACT = styled.div`
padding-top:7rem;
& h1{
    text-align:center;
    font-weight:900;
}
`

export const LISTS_CONTAINER = styled.div`
width:100%;
max-width:650px;
margin:0 auto;
display:flex;
align-items:center;
flex-wrap:wrap;
`

export const BULL_UL = styled.div`
margin-top: 1rem;
flex:1;
display: flex;
justify-content: center;
gap:3rem;
`

export const CONTACT_UL = styled.ul`
max-width:300px;
height: 100%;
padding:3rem 0 0 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;

& li{
    position: relative;
    width: fit-content;
    padding-left: 20px;
    margin-bottom:1.5rem;
    display:flex;
    flex-direction:column;
    gap:2px; 
    
    & > span:first-child{
        width:50px;
        font-size:15px;
        font-weight:600;
        opacity:.8;
    };

    & > span:last-child{
        padding-left:5px;
        font-size:15px;
    };

    &:before{
        content:'';
        position:absolute;
        left:9px;
        top:0;
        width:4px;
        height:20px;
        background:var(--spicealColor);
    }
}`