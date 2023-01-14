import styled,{keyframes} from "styled-components";

const btnAnime = keyframes`
0% {
    transform: skewX(-30deg)translateX(-100%);
}
25% {
    transform: skewX(-30deg)translateX(-75%);
}
50% {
    transform: skewX(-30deg)translateX(-50%);
}
75% {
    transform: skewX(-30deg)translateX(-25%);
}
100%{
    transform: skewX(-30deg)translateX(-10%);
}
`

const Button = styled.button`
position: relative;
min-width:200px;
padding:.75rem .5rem;
margin-top:5px;
font-size:1.1rem;
font-weight:600;
border-radius:25px;
border:.5px solid var(--spicealColor);
background:${props => props.background};
overflow:hidden;

& span{
    position: relative;
    z-index:1;
}

&:before{
content: '';
position: absolute;
top:0px;
left:0px;
width:200%;
height:200%;
background:${props => props.backgroundLayOut};
transform-origin: 50% 50%;
transform: skewX(-30deg)translateX(-160%);
transition: transform .7s ease-in-out;
z-index:0;
}

&:hover{
    border:.5px solid : ${props => props.backgroundLayOut}
}
&:hover::before{
    animation: ${btnAnime} .7s ease-in-out;
    animation-fill-mode:forwards;
}
`

export default Button