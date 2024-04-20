import styled from "styled-components";

export const Projects = styled.div`
padding: 5rem 0 1rem;
`

/************************ Project filter *********************/ 

export const SELECT_BULL = styled.div`
position: absolute;
top:-40px;
left:${props => props.left};
width:70px;
height:70px;
background: var(--spicealColor);
z-index: 10;
border-radius: 50%;
/*box-shadow:1px 1px 0 5px var(--bg);*/
border:5px solid var(--bg);
transition: left .5s ease-in-out;

&:before{
    content: '';
    position: absolute;
    top: 59%;
    left: -19px;
    height:20px;
    width: 20px;
    border-top-right-radius: 20px;
    background:var(--spicealColor);
    box-shadow: 0px -7px 0 0 var(--bg);
    z-index: -1;
}
&:after{
    content: '';
    position: absolute;
    top: 59%;
    right: -19px;
    height:20px;
    width: 20px;
    border-top-left-radius: 20px;
    background:var(--spicealColor);
    box-shadow: 0px -7px 0 0 var(--bg);
    z-index: -1;
}
`
export const PROJECT_FILTER_CONTAINER = styled.div`
position:relative;
width:300px;
height:60px;
margin: 4rem auto 2rem;
background: var(--spicealColor);
z-index: 0;
`

export const PROJECT_FILTER = styled.ul`
position: relative;
display:flex;
width:260px;
height:100%; 
font-size:1.4rem;
margin:0 auto;
background: var(--spicealColor);
& li{
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    color:var(--homebg);
    cursor: pointer;
}
& .icon{
    transform: translateY(15px);
    transition: transform .1s ease-in-out;
    z-index:15;
}
& .text{
transform: translateY(30px);
transition: transform .1s ease-in-out;
opacity: 0;
}

& .text.up{
    transform: translateY(0);
    opacity:1;
}
& .icon.up{
    transform: translateY(-22px);
}

`
export const Hr = styled.hr`
width: 90%;
padding: 0.5px;
margin: 3rem auto;
border: none;
background: var(--spicealColor);
`

/******************** PROJECT ************************** */


export const PROJECT_FRONT = styled.div.attrs({
className:'front clicked abs-div'
})
`
display: flex;
align-items: center;
justify-content: center;
gap: 1rem;
z-index:1000;
transform:translateX(-100%) !important;
background: #111111c7;


svg{
    fill:#fff;
    font-size:2rem;

    &:hover{
        fill:cyan;
    }
}
`
export const PROJECT_BACK = styled.div.attrs({
className:'back clicked abs-div',
})`
possion : relative;
& div {
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    z-index:5;
    opacity:1;
}
z-index:1;
`

export const PROJECT_BODY = styled.div.attrs({
    className:'project-body'
})`
    height:calc(100% - 40px);
    position:relative;
`

export const PROJECT_FOOTER = styled.footer.attrs({
    className:'project-body'
})`
    height:37px;
    margin-top:3px;
    display flex;
    align-items:center;
    justify-content:space-between;
    padding:0 .5rem;
    background:var(--homebg);


        > .project-title{
            font-size:1rem;
            font-weight:600;

            @media(min-width:1024px){
                font-size:1.1rem;
            }
        }

        > ul{
            height: 100%;
            display: flex;
            align-items: center;
            justify-content:center;
            gap:.5rem;
            background: var(--homebg);
            opacity:.8;

            & li{
                font-size:14px;
                font-weight:bold;
                color:var(--weakColor);
                min-width:fit-content;

                @media(min-width:1024px){
                    font-size:1rem;
                }
            }
    

        }
        z-index:2;
        

        /*> .project-tools{
            display:flex;
            align-items:center;
            justify-content:center;
        }*/
`

export const PROJECT = styled.article`
flex:1;
min-width:330px;
width:90%;
max-width:450px;
height:280px;
margin:1rem auto 0;
border-radius:0;
perspective:1000px;
box-shadow: 1px 1px 10px var(--spicealColor) ,-2px -2px 10px var(--spicealColor);
transition: all .5s ease-in-out;
background:var(--bg);
 & > .project-body{
    & > .abs-div {
        position:absolute;
        top:0;
        left:0;
        height:100%;
        width:100%;
        border-radius:inherit;
        }
        & .open{
            transition: transform .5s ease-in-out;
            transform:translateX(-100%);
            transform-origin: top right;
        }
        & .close{
            transition: transform .5s ease-in-out;
            transform:translateX(0) !important;
            transform-origin: top right;
        }
        & img{
            width:100%;
            height:100%;
            border-radius:inherit;
        } 
 }
`


/******************** PROJECT_CONTAINER *********************/

export const PROJECT_CONTAINER = styled.div`
display: flex;
justify-content: space-around;
gap: 1rem;
flex-wrap: wrap;
padding: 0 1rem;

& * {
    overflow:hidden !important;
}

`


