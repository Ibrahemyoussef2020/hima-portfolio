import styled from 'styled-components'
import {BsFlower2} from 'react-icons/bs'
import { SlList } from "react-icons/sl";

/*************  RoutsList **************** */

export const RoutsStyle = styled.div.attrs(props =>({
    className : props.className ,
}))
`
width: 100%;
max-width:300px;
display:flex !important;
justify-content: center;
align-items: center;
gap:1.5rem;
flex-wrap: wrap;
`

export const RoutsList = (props)=>{
    return <RoutsStyle {...props}>
        {props.children}
    </RoutsStyle>
}

/************* ButtonList **************** */

const ButtonStyle = styled.button`
position:fixed;
top:2rem;
right:2rem;
background:transparent;
font-size:3rem;
z-index:1000;

& > svg{
    fill:var(--spicealColor);
}
`
export const ButtonList = (props)=>{
    return <ButtonStyle {...props} className='spiceal'>
        <SlList/>
        </ButtonStyle>
}

/*************  RoutsContainer **************** */
const RoutsContainerStyle = styled.div`

`

export const RoutsContainer = (props)=>{
    return <RoutsContainerStyle {...props}>
        {props.children}
    </RoutsContainerStyle>
}

/****************** color list ****************************** */



