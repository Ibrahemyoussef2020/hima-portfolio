import styled from 'styled-components'
import {BsFlower2} from 'react-icons/bs'
import {GiSunflower} from 'react-icons/gi'

/*************  RoutsList **************** */

export const RoutsStyle = styled.ul.attrs(props =>({
  //  className : props.className,
}))`
position: absolute;
top:35px;
left:50%;
height:0;
width:5px;
transform: translateX(-50%);
transform-origin: top center;
animation-fill-mode: forwards !important;
transition-delay: .5s !important;
transition: height .4s ease-in-out;
border-radius:0 0 30px 30px;
background:var(--spicealColor);
overflow: hidden;

& > * {
    position:absolute;
    left:-64px;
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    text-transform: capitalize;
    transform: rotateZ(12deg);
}
& *{
    white-space:nowrap;
    font-size:1.2rem;
    font-weight: 500;
}
& .margin-hover{
    margin:15px 0  0 10px;
    animation: listTextAnime .1s linear;
    animation-fill-mode: forwards;
    transition: transform .1s linear;
}
& .img-arrow{
    display: inline-block;
    margin-left:1rem; 
    transform:rotatez(-40deg)translateY(-7px);
     color:var(--spicealColor);
     background:var(--homebg);
}
& .text-arrow{
    display: inline-block;
    margin-right:1rem;
    transform: rotateZ(-29deg);
     color:var(--spicealColor);
     background:var(--homebg);
}
& .not-arrow{
    padding:5px 0px;
    color:var(--normalColor);
}
&  span.icons-list svg{
    font-size:1.7rem;
    opacity:.8;
    transform: rotateZ(-13deg);
}
`

export const RoutsList = (props)=>{
    return <RoutsStyle {...props}>
        {props.children}
    </RoutsStyle>
}

/************* ButtonList **************** */

const ButtonStyle = styled.button`
width:100%;
height:56px;
font-size:2.5rem;
border-top-left-radius:7px;
border-top-right-radius:7px;
display: flex;
flex-direction: column;
justify-content:center ;
align-items: center;
background: inherit;
color:var(--spicealColor);
transform: rotateZ(-9deg);
z-index:3;

&:hover{
    animation:listAnime 1s ease-in-out
}
`
export const ButtonList = (props)=>{
    return <ButtonStyle {...props} className='spiceal'>
        <GiSunflower/>
        </ButtonStyle>
}

/*************  RoutsContainer **************** */
const RoutsContainerStyle = styled.section`
position:fixed;
top:var(--fixedTop);
left:var(--fixedLeft);
height: 56px;
width:50px;
font-weight: bold;
background: transparent;
z-index: 1000;
`

export const RoutsContainer = (props)=>{
    return <RoutsContainerStyle {...props}>
        {props.children}
    </RoutsContainerStyle>
}

/****************** color list ****************************** */



