import styled from "styled-components";

const SmallBullStyle = styled.div`
width: 50px;
height:50px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size:1.3rem;
box-shadow:1px 1px 10px var(--spicealColor) , -2px -2px 10px var(--spicealColor);
cursor: pointer;
transition: transform .5s ease-in-out;

box-shadow:1px 1px 10px var(--spicealColor) , -2px -2px 20px var(--spicealColor);
transform:perspective(500px) translateZ(50px)rotateX(57deg);

&:hover{
    box-shadow:1px 1px 10px var(--spicealColor) , -2px -2px 20px var(--spicealColor);
    transform:perspective(500px) translateZ(50px)rotateX(-20deg);
}
`

const SMALL_BULL = (props)=>{
    return <SmallBullStyle {...props}
    >
            {props.children}
    </SmallBullStyle>
}

export default SMALL_BULL