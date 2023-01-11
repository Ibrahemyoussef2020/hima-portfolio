import styled,{keyframes} from "styled-components";

/****** Home ******/

const Home_style = styled.div`
display:'flex';
flex-direction:'column';
justify-content:'center';
align-items:'center';
padding:calc(var(--fixedTop) + 100px) .5rem 0 .5rem;
background: var(--homebg);
transform-origin: bottom center;
transition:transform 1s ease-in-out ;
`

export const Home_ = (props)=>{
    return <Home_style {...props} className={`page Home ${props.className}`}>
        {props.children}
    </Home_style>
}

/****** Home Img ******/

const Home_Img_style = styled.section`
display:flex;
justify-content:center;
align-items:center;
& > div{
    height:250px;
    width:250px;
    padding:15px;
    border:1px solid var(--homebg);
    background:var(--bg);
}
`

export const Home_Img_ = (props)=>{
    return <Home_Img_style {...props} className='home-img'>
        {props.children}
    </Home_Img_style>
}

/****** Home Content ******/

const Home_Content_Style = styled.section`
display:'flex';
justify-content:'center';
align-items:'center';
padding:.5rem 0 .5rem 2rem ;
& > * {
    margin-top:1.5rem
}
`
export const Home_Content_ = (props)=>{
    return <Home_Content_Style {...props}>
        {props.children}
    </Home_Content_Style>
}


const Animation_Title_Container_Style = styled.div`
overflow:hidden;
height:42px;
position:relative;
`
export const Animation_Title_Container = (props)=>{
    return <Animation_Title_Container_Style {...props} className='spiceal'>
            {props.children}
    </Animation_Title_Container_Style>
}

/*  h1  */

const titleAnime = keyframes` 
  100% {
    left:100%
  }
`
const TransposeTitle = keyframes`
100%{
    top :-64px;
}
`

const  Animated_Title_Style = styled.h1`
position: absolute;
top:0;
left: 0;
width: 100%;
height: 100%;
animation: ${TransposeTitle} 6s steps(2) infinite;


& span {
    position:relative;
    display: block;
    margin 5px auto;
    overflow: hidden;
    white-space: nowrap;
}

& span:after{
content:'';
position: absolute;
left: 0;
top: 0;
width: 100%;
height: 100%;
background: var(--homebg);
animation: ${titleAnime} 3s steps(22) infinite  ;
}
`

export const Animated_Title = (props)=>{
    return <Animated_Title_Style {...props} className='mainTitle Animated_Title'>
        {props.children}
    </Animated_Title_Style>
}





