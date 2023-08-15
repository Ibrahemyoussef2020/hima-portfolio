import styled from "styled-components";

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
margin: 10rem auto 2rem;
background: var(--spicealColor);
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
className:'front clicked'
})
`
& ul{
    height: 100%;
    padding-top:.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    gap:.5rem;
    background: var(--homebg);
    opacity:.8;

    & svg {
        position: absolute;
        top:1rem;
        left: 50%;
        transform: translatex(-50%);
        font-size:2rem;
        font-weight:bold;
        fill:var(--spicealColor);
        z-index:5;
    }
}
z-index:2;
`
export const PROJECT_BACK = styled.div.attrs({
className:'back clicked',
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
    background:transparent;
    }
z-index:1;
`
export const PROJECT = styled.article`
position:relative;
width:250px;
height:250px;
margin-top:1rem;
border-radius:15px;
perspective:1000px;
box-shadow: 1px 1px 10px var(--spicealColor) ,-2px -2px 10px var(--spicealColor);
transition: all 2.5s ease-in-out;
& > div {
position:absolute;
top:0;
left:0;
height:100%;
width:100%;
border-radius:15px;
}
&  .open{
    transition: transform 1.2s ease-in-out;
    transform:translateY(-100%);
    transform-origin: top left;
}
& .close{
    transition: transform 1.2s ease-in-out;
    transform:translateY(0px);
    transform-origin: top left;
}
& img{
    width:100%;
    height:100%;
    border-radius:15px;
}
`


/******************** PROJECT_CONTAINER *********************/

export const PROJECT_CONTAINER = styled.div`
display: flex;
justify-content: space-around;
gap: 1rem;
flex-wrap: wrap;

& * {
    overflow:hidden !important;
}

`


