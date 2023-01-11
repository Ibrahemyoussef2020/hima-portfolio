import styled from "styled-components";
import {LARGE_BULL} from '../../components'

export const ABOUT = styled.div`
padding-top:7rem;
& h1{
    text-align:center;
}
& hr{
    width:90%;
    padding:.5px;
    margin:2rem auto;
    border:none;
    background:var(--spicealColor);
}
`
/* Img CONTAINER */

/* Img */

export const ABOUT_IMG = styled.div`
display:block;
width: 100%;
max-width: 270px;
height: 290px;
border: 5px solid var(--spicealColor);
transform: rotateY(40deg);
transform-origin: top right;

& img{
width: 100%;
height: 100%;
}

& span{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 28px;
    padding-bottom:5px;
    font-size:1.2rem;
    font-weight:900;
    font-style:italic;
    background:var(--homebg);
    color:var(--normalColor);
    display: flex;
    justify-content:center;
    align-items: center;
}
`
    /* CONTAINER */

const ABOUT_IMG_CONTAINER_Style = styled.section`
position:relative;
width:100%;
max-width:280px;
height:295px;
overflow:visible;
margin:3.5rem auto 4.5rem;
border:5px solid var(--spicealColor);
border-bottom:none;
transform: rotateY(3deg);
transform-style:preserve-3d;
transform-origin:top right;
background:#fff;
perspective:1000px;


&:before{
content:'';
position: absolute;
top: 0px;
left: 0px;
height: 110%;
width: 70px;
background:#fff;
transform:rotateY(-28deg)translate(-7px , -3px);
}
`
export const ABOUT_IMG_CONTAINER = (props)=>{
    return <ABOUT_IMG_CONTAINER_Style {...props} className='clicked'>
             <ABOUT_IMG>
                <img src="images/formal.jpg" alt="Ibrahim"/>
                <span>CV</span>
             </ABOUT_IMG>
    </ABOUT_IMG_CONTAINER_Style>
}

/***********  ABOUT_UL ************* */

const ABOUT_UL_Style = styled.ul`
height: 100%;
padding-left:1rem;
display: flex;
flex-direction: column;
justify-content: space-around;

& li{
    position: relative;
    width: fit-content;
    padding-left: 30px;
    margin-bottom:2rem;
    display:flex;
    gap: 2rem; 
    
    & > span:first-child{
        width:60px
    }

    &:before{
        content:'';
        position:absolute;
        left:0;
        bottom:0;
        width:10px;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid var(--spicealColor);
        border-right: 10px solid transparent;
    }
}
`
export const ABOUT_UL = (props)=>{
    return <ABOUT_UL_Style {...props}>
            {props.children}
    </ABOUT_UL_Style>
}

/******************** personel-information  ********************/

const Personel_Information_Style = styled.section`
margin-top:2rem;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;

& > div{
    flex:1;
    height:100%;
    width:100%;
}
@media (max-width: 700px) {
    flex-direction: column;
  }
`
export const PERSONEL_INFORMATION = (props)=>{
    return <Personel_Information_Style {...props}>
        {props.children}
    </Personel_Information_Style>
}


/********************skills*****************************/

const skillsArray = ['HTML','B_STRAP','CSS','SASS','JS','TS','JQUERY','REACT','REDUX','NEXTJS']

const Skills_Style = styled.section`
width: 100%;
padding: 15px;
margin-top:3rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;

& > div{
    margin:40px 10px;
}

& > div:nth-child(odd){
    transform:translateY(-50px)
 }    
}
`

export const SKILLS = (props)=>{
    return <Skills_Style {...props}>
        {
            skillsArray.map((skill,index) => (index + 1) < 3 &&  <LARGE_BULL key={skill}>{skill}</LARGE_BULL>)
        }
        {
            skillsArray.map((skill,index) => (index + 1) >= 3 && (index + 1) < 5  &&  <LARGE_BULL key={skill}>{skill}</LARGE_BULL>)
        }

        {
            skillsArray.map((skill,index) => (index + 1) >= 5 && (index + 1) < 7  &&  <LARGE_BULL key={skill}>{skill}</LARGE_BULL>)
        }
 
        {
            skillsArray.map((skill,index) => (index + 1) >= 7 &&  <LARGE_BULL key={skill}>{skill}</LARGE_BULL>)
        }
    </Skills_Style>
}


