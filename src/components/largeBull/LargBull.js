import styled from "styled-components";

const LargeBullStyle = styled.div`
width: 100px;
height: 100px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
box-shadow:1px 1px 10px var(--spicealColor) , -2px -2px 10px var(--normalColor);
`

const LARGE_BULL = (props)=>{
    return <LargeBullStyle {...props}
    >
            {props.children}
    </LargeBullStyle>
}

export default LARGE_BULL

