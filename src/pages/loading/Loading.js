import styled,{keyframes} from "styled-components";


const Hima_anime = keyframes`
0%,18%,20%,50.1%,60%,65.1%,80.5%,90.1%,92%{
    color:#0e3742;
    text-shadow: none;
  }
  18.1%,20.1%,30%,50%,60.1%,65%,80.1%,90%,92.1%{
    color:#fff;
    text-shadow: 0 0 0px #03bcf4,
                0 0 20px #03bcf4,
                0 0 40px #03bcf4,
                0 0 80px #03bcf4,
                0 0 160px #03bcf4;
  }
`

export const Hima = styled.h1`
position: relative;
letter-spacing: 1rem;
text-align:center;
font-size:calc(2rem + 4vw);
margin-bottom:1rem;
color:#0e3742;
-webkit-box-reflect:below 1px linear-gradient(transparent,#000) ;
-moz-box-reflect:below 1px linear-gradient(transparent,#000) ;
-o-box-reflect:below 1px linear-gradient(transparent,#0008) ;
outline: none;
background: none;
border: none;
animation: ${Hima_anime} 5s linear infinite;
`

export const LOADING_CONTAINER = styled.div`
height: 100%;
min-height:100vh;
display: flex;
justify-content: center;
align-items: center;
background: #07252d /*#25aff3*/;
`