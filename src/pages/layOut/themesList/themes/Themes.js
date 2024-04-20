import styled,{keyframes} from "styled-components";


/*  themes list container */

const ThemesListStyle = styled.div`
position: relative;
width:100%;
height:70px;
margin:3rem auto;
border-radius:7px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
transition: transform .5s ease-in-out;
border:1px solid var(--spicealColor);
box-shadow:0 0 8px 0px var(--spicealColor);
background-color:var(--homebg);

&:before{
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: var(--homebg);
    opacity: 1;
    z-index: -1;
}

&  svg{
    font-size:2.5rem;
    transition:transform .3s eas-in-out;
    &:hover{
        transform:scale(1.1,1.1);
    }
} 

`

export const ThemesListContainer = (props)=>{
    return <ThemesListStyle {...props}>
        {props.children}
    </ThemesListStyle>
}

/* themes list ul */


const ThemesListWrapperStyle = styled.ul`
width:100%;
display:flex;
justify-content:space-around;
flex-wrap:wrap; 
`
export const ThemesListWrapper= (props)=>{
    return <ThemesListWrapperStyle {...props}>
        {props.children}
    </ThemesListWrapperStyle>
}

/* themes list ul */

const ModesLiStyle = styled.li`
font-size:2.2rem;          
`
export const ModesLi = (props)=>{
    return <ModesLiStyle {...props} className='clicked themes' style={{color:props.color}}>
        {props.children}
    </ModesLiStyle>
}

const ThemesLiStyle = styled(ModesLiStyle)`
            
`
export const ThemesLi = (props)=>{
    return <ThemesLiStyle {...props} className='clicked modes' style={{color:props.color}}>
        {props.children}
    </ThemesLiStyle>
}

