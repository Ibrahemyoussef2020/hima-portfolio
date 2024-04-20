import styled from "styled-components";

const MediumBullStyle = styled.div`
position relative;
width:80px;
height:80px;
padding:0;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size:.9rem;
font-weight:700;
text-transform: capitalize;
cursor: pointer;
border:1px solid var(--spicealColor);
box-shadow:0px 0px 17px 0px var(--spicealColor);
background:var(--homebg);
transition:.1s;

&::before{
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: var(--homebg);
    opacity: 1;
    z-index: -1;
    border-radius:50%;
}

&:hover{
    box-shadow: 0 0 22px 0px var(--spicealColor);
    color:var(--spicealColor);
}
`

const Medium_BULL = (props)=>{
    return <MediumBullStyle {...props}
    >
            {props.children}
    </MediumBullStyle>
}

export default Medium_BULL

