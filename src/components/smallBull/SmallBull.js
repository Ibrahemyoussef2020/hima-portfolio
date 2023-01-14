import styled from "styled-components";

const SMALL_BULL = styled.div`
width:70px;
height:70px;
padding:0;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size:2rem;
cursor: pointer;
transition: transform .5s ease-in-out;
border:1px solid var(--spicealColor);
box-shadow:0 0 8px 0px var(--spicealColor);
transition:.1s;
& > svg{
    fill:var(--spicealColor);
    transform:scale(1.1,1.1)
} /* translateX(-5deg) */
&:hover{
    transform:perspective(500px)translate3d(-5px,-5px,50px)!important;
    box-shadow:0 0 15px 0px var(--spicealColor);
}
`
export default SMALL_BULL