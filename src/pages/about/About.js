import styled from "styled-components";
import {LARGE_BULL} from '../../components'

export const ABOUT = styled.div`
padding-top:7rem;
& hr{
    position:relative;
    width:90%;
    max-width:700px;
    padding:1px;
    margin:2rem auto;
    border:none;
    background:var(--spicealColor);
    background:var(--normalColor);
    z-index:-2;
}

h2:not(.about-heading){
    position: relative;
    width: fit-content;
    top: -4rem;
    background:var(--bg);
    border-left:1rem solid var(--bg);
    border-right:1rem solid var(--bg);
    z-index: 10;
    margin: auto ;
    padding: 0 1rem;
    z-index:0;

    @media(max-width:767px){
        font-size: 1.8rem;
    }
}
`
/* Img CONTAINER */

/* Img */

export const ABOUT_IMG = styled.div`
display:block;
max-width: 270px;
height: 290px;
border: 5px solid var(--spicealColor);
transform: rotateY(40deg);
transform-origin: top right;

& img{
width: 100%;
height: 100%;
}

&:hover {
    span{
        height:50px !important;
    }
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
    transation:height .3s ease-in-out;
}
`
    /* CONTAINER */

const ABOUT_IMG_CONTAINER_Style = styled.section`
position:relative;
max-width:280px;
width:fit-content;
height:295px;
overflow:visible;
margin:3.5rem auto 5.5rem;
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
                <img src="images/formal-progressive.webp" alt="Ibrahim"/>
                <span>CV</span>
             </ABOUT_IMG>
    </ABOUT_IMG_CONTAINER_Style>
}

/******************** personel-information  ********************/

/*******  ABOUT_UL ****** */

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
        left:10px;
        top:0;
        width:5px;
        height:20px;
        background:var(--spicealColor);
        /*
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        border-left: 10px solid var(--spicealColor);
        border-right: 10px solid transparent;
        */
    }
}
`
export const ABOUT_UL = (props)=>{
    return <ABOUT_UL_Style {...props}>
            {props.children}
    </ABOUT_UL_Style>
}

const Personel_Information_Style = styled.section`
margin-top:2rem;
display:flex;
justify-content:center;
align-items:center;
flex-wrap:wrap;
gap:2rem;

& > div{
   /* flex:1;
    height:100%;
    width:100%; */
}
& span{
   line-height: 1.6rem;
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


/******************  services   ***********************/

const Service_Style = styled.article`
    position:relative;
    flex: 1;
    min-width:280px;
    /*max-width:420px;*/
    min-height:200px;
    padding:.5rem;
    border-top: 4px solid var(--spicealColor);
    background:inherit;
    transition: background-color .3s ease-in-out;

    &:hover{
        background: var(--homebg);
    }

    &:after{
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        background:var(--homebg);
        opacity: .5;
    }

    svg{
        display: block;
        margin-left:.5rem;
        font-size: 2.2rem;
        font-weight: 700;
        fill: var(--spicealColor);
    }

    h3{
        width:fit-content;
        font-size: 1.2rem;
        padding: .5rem 0 .5rem;
        margin-bottom:.5rem;
        border-bottom: 4px solid var(--spicealColor);
    }
    p{
        font-size:.828rem;
        line-height:1.4rem;
    }
`

const Services_Style = styled.section`
    width:90%;
    padding:.5px;
    margin: 0 auto 6rem;
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    gap: 1rem;
`

export const Service = (props)=>{
    return <Service_Style  {...props}>
        {props.children}
    </Service_Style>
}

export const Services = (props)=>{
    return <Services_Style  {...props}>
        {props.children}
    </Services_Style>
}

/*********    code skills        ********* */

export const COAD_SKILLS_WRAPPER = styled.div`
    display:flex;
    align-items:flex-start;
    
    @media(max-width:500px){
        flex-wrap:wrap;
        justify-content:center;
    }
    @media(min-width:767px){
        justify-content:center;
    }
`

export const COAD_SKILLS = styled.div`
    width:100%;
    margin-left: 10%;
    max-width:300px;
    border-left:2px solid var(--spicealColor);
    margin-bottom:6rem;
    & > article {
        position:relative;
        left:-13px;
        padding-left:1.6rem;
        
        &:not(:last-of-type){
            margin-bottom:2.5rem;
        }

        & .bull{
            position:absolute;
            top:0;
            left:1px;
            width: 25px;
            height: 25px;
            border-radius: 50%;
            border: 2px solid var(--spicealColor);
            background: var(--bg);
        }
        & .title{
            flex:1;
            max-width: fit-content;
            position: relative;
            font-size: 1.1rem;
            padding: 0 8px;
            margin-bottom:1rem;
           /* color:var(--spicealColor); */
            background: var(--bg);
            z-index: 1;
        }
        & .desc{
            position:relative;
            flex:1;
            max-width: fit-content;
            position: relative;
            font-size:15px;
            padding: 0 0 0 1rem;
            background: var(--bg);
            color:var(--weakColor);
            z-index: 1;

            & > span{
                opacity:.7;
            }

            &:before{
                content:'';
                position: absolute;
                top: 50%;
                left: -.929rem;
                transform: translateY(-50%);
                width:15px;
                height: 3px;
                background: var(--spicealColor);
            }
        }
        & .arrow {
            position:absolute;
            top:12px;
            left:2px;
            width:100%;
            height:2px;
            background:var(--spicealColor);
            z-index:-1;
        }
    }
`
/******************  main skills circles  ****************************/

export const MAIN_SKILLS_WRAPPER = styled.section`
display:flex;
justify-content:space-around;
gap:4rem 5rem;
margin:50px auto;
padding:0 2rem;

@media(max-width:650px){
    flex-wrap:wrap;
}
@media(min-width:560px){
    width:90%;
    padding:0 3rem;
}
`
export const MAIN_SKILLS = styled.div`
flex:1;
display: flex;
justify-content: center;
position:relative;
border:2px solid var(--spicealColor);
border-bottom:none;
height:300px;
min-width:220px;
max-width:500px;
padding:2rem 3rem;
margin-top:100px;
text-transform: uppercase;

@media(max-width:450px){
    min-width:280px;
    max-width:80%;
}

.skill{
 position: absolute;
 bottom: 25px;
 left: -25px;
 width: 50px;
 height: 50px;
 background:yellowgreen;
 background:var(--spicealColor);
 color:#000;
 display: flex;
justify-content:center;
align-items: center;
font-size:1.7rem;


&.center{
    top:250px;
    left:50%;
    transform:translateX(-50%);
    bottom:unset;
}

 &.right{
    left:unset;
    right:-25px;
 }

 &.mui{
    font-size:.828rem;
    font-weight:700;
 }

 & > h4{
    position:absolute;
    bottom:-50px;
    z-index:1;
    font-size: 14px;
    font-weight:400;
    text-transform: capitalize;
 }

}

 > .double-skills{
    flex:1;
    position:relative;
    top:-100px;
    border:2px solid var(--spicealColor);
    border-bottom:none;
    height:200px;


    & h3{
        position: absolute;
        top: -80px;
        width: 100%;
        text-align: center;
    }

    &:before{
        content:'';
        width:3px;
        height:380px;
        position: absolute;
        top: -50px;
        left:50%;
        transform:translateX(-50%);
        background: var(--spicealColor);
    }

 }
`


/******************  main skills circles  ****************************/

const skillsArray = ['html','bootstrap','css','sass','javscript','typescript','jquery','react','redux','nextjs']

const Skills_Style = styled.section`
width: 100%;
padding: 15px;
display: flex;
flex-wrap: wrap;
justify-content: center;
align-content: center;
display:none;

& > div{
    margin:40px 10px;
    font-size:14px;
    text-transform: capitalize;
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


