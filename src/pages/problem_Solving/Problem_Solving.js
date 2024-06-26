import styled from "styled-components";

    /********* Problem_Solving_  ********/

export const Problem_Solving_ = styled.div`
padding: 3rem 0 0;
display: flex;
flex-direction: column;
justify-content: center;
flex-wrap:wrap;
background:var(--homebg);

& *{
    word-break: break-all;
    margin-bottom:1rem;
    line-height:1.6rem;
}
& h3 , & .site{
    color:var(--spicealColor)
}


& .algorithm__intro{
    padding:.5rem;
}

& p{
    font-size:1rem;
}

@media (min-width:450px){
    & p{
        font-size:1.2rem;
    }
}

`
export const JS_Armies = styled.div`
padding-top:5rem;
display: flex;
align-items: center;
justify-content: center;
perspective: 1000px;

& h2 {
    color:#ffc72f !important;
    font-weight:900;
    font-size:6rem;
    text-shadow:5px 1px 1px #000, 2px 3px 1px;
    font-family:Arial, tahuma, sans-serif;
}

& img{
    width:50px;
    height:50px;
    margin-bottom:3.3rem
}
& img:first-of-type{
    transform: rotateY(50deg);
    margin-right:-10px;
}
& img:last-of-type{
    transform: rotateY(147deg);
}
`

/************* JS_Sites   ************** */

export const JS_Sites = styled.div`
width:100%;
max-width: 500px;
margin:1.5rem auto .5rem;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
gap:2rem;
font-style: italic;
font-weight:bold;
}
`