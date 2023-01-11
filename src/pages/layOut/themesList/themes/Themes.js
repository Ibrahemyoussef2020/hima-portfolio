import styled,{keyframes} from "styled-components";


/*  themes list container */

const ThemesListStyle = styled.div`
position:fixed;
top:calc(var(--fixedTop) + 10px);
left:calc(var(--fixedLeft) + 100px);
width:calc(100% - calc(var(--fixedLeft) + 100px));
max-width:300px;
transform: rotateZ(-8deg);
z-index:900;
`

export const ThemesListContainer = (props)=>{
    return <ThemesListStyle {...props}>
        {props.children}
    </ThemesListStyle>
}

/* themes list ul */

const fly = keyframes`
  from {
    transform: scale3d(1,1,1);
  }

  to {
    transform: scale3d(.85,.85,1);
  }
`

const ThemesListUlStyle = styled.ul`
width:100%;
display:flex;
justify-content:space-around;
flex-wrap:wrap; 
`
export const ThemesListUl= (props)=>{
    return <ThemesListUlStyle {...props}>
        {props.children}
    </ThemesListUlStyle>
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
animation: ${fly} .1s ease-in-out;
animation-iteration-count: infinite;            
`
export const ThemesLi = (props)=>{
    return <ThemesLiStyle {...props} className='clicked modes' style={{color:props.color}}>
        {props.children}
    </ThemesLiStyle>
}

