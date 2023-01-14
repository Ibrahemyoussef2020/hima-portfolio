import styled,{keyframes} from "styled-components";

/****** HOME ******/

export const HOME = styled.div.attrs({
    className:`page home`,
})`
padding-top:calc(var(--fixedTop) + 50px);
margin:0 auto;
background: var(--homebg);
transform-origin: bottom center;
transition:transform 1s ease-in-out;

& > div{
width:85%;    
min-height:calc(100vh - calc(var(--fixedTop) + 50px));
margin:0 auto;    
display:flex;
justify-content:center;
align-items:center;
align-items:center;
    & > *{
        flex:1
    }
}

& .home-img{
    max-width:40%;
}

@media (max-width:800px){
    padding-top:calc(var(--fixedTop) + 100px);

    & > div {
        flex-direction:column;
        justify-content:flex-start;
    }
}

@media (max-width:576px){
    & .home-img{
        display:none;
    }
}
`

/****** HOME Img ******/

export const HOME_IMG = styled.section.attrs({
    className:`home-img`
})`
display:flex;
justify-content:center;
align-items:center;
& > div{
    height:300px;
    min-height:300px;
    width: 300px;
    min-width: 300px;
    padding:1rem;
    border:1px solid var(--homebg);
    background:var(--bg);
}
`

/****** HOME Content ******/

export const HOME_CONTENT= styled.section`
display:flex;
justify-content:center;
flex-direction:column;

& > *:not(h3) {
    margin-top:1.3rem
}
 
`

/******** ANIMATED  TITLE   *******/

export const ANIMATION_TITLE_CONTAINER = styled.div`
overflow:hidden;
height:47px;
position:relative;
`

const titleAnime = keyframes` 
  100% {
    left:100%
  }
`
const TransposeTitle = keyframes`
100%{
    top :-87px;
}
`

export const  ANIMATED_TITLE = styled.h1.attrs({
    className:'mainTitle Animated_Title'
})`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
font-size:2rem;
animation: ${TransposeTitle} 6s steps(2) infinite;


& span {
    position:relative;
    display: block;
    margin 5px auto;
    overflow: hidden;
    color:var(--spicealColor);
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

@media (max-width:470px){
    font-size:1.4rem;
}

`
/* CONTENT FOOTER */

export const CONTENT_FOOTER = styled.footer`
padding-bottom:2rem;
display:flex;
align-items:center;
flex-wrap: wrap;
gap:1rem;
`




