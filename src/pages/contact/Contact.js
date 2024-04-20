import styled  from "styled-components";

export const CONTACT = styled.div`
padding-top:8rem;
min-height:calc(100vh - 50px);
& h1{
    text-align:center;
    font-weight:900;
}
`

export const LISTS_CONTAINER = styled.div`
width:100%;
max-width:650px;
margin:0 auto;
display:flex;
align-items:center;
flex-wrap:wrap;
`

export const BULL_UL = styled.div`
margin: 1rem 0;
flex:1;
display: flex;
justify-content: center;
gap:3rem;
`

export const CONTACT_UL = styled.ul`
max-width:300px;
height: 100%;
padding:3rem 0 0 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;

& li{
    position: relative;
    width: fit-content;
    padding-left: 20px;
    margin-bottom:1.5rem;
    display:flex;
    flex-direction:column;
    gap:2px; 
    
    & > span:first-child{
        width:50px;
        font-size:15px;
        font-weight:600;
        opacity:.8;
    };

    & > span:last-child{
        padding-left:5px;
        font-size:15px;
    };

    &:before{
        content:'';
        position:absolute;
        left:9px;
        top:0;
        width:4px;
        height:20px;
        background:var(--spicealColor);
    }
}`


export const FORM_HEADING = styled.p.attrs({
    className:'second-title'
})
` margin:3rem auto 1rem;
  display:none;
`

 export const FORM_CONTACT = styled.div.attrs({
    
})`
    & form {
        width:100%;
        display:flex;
        flex-wrap:wrap;
        column-gap:1rem;
        margin:0 auto 1rem;
        padding:2rem ;
    
        & div {
            position:relative;
            flex:1;
            min-width:100%;
            min-height:50px;
            margin:0 auto 1.5rem;
            border:1px solid var(--spicealColor);   
            box-shadow: 0 0 4px 0px var(--spicealColor);
            padding:5px;
            border-radius:4px;
            margin-bottom:1.8rem;
            @media(min-width:500px){
                min-width:45%;
                min-height:50px;
            }
    
            &:has(input:focus){
                h3{
                    color:#fff !important;
                }
            }
        }
        
        & div h3{
            position: absolute;
            top:-1rem;
            left:.5rem;
            background:var(--bg);
            font-size:.85rem;
            font-weight: 400;
            padding:.4rem 1rem;
            color:#888;
        }
    
        & div input{
            min-width:100%;
            min-height:50px;
            display:flex;
            align-items:center;
            background:transparent;
            border-radius:.5rem;
            border:none;
            outline:none;
            padding:5px .5rem;
            background: var(--bg);
        }
        & textarea {
            display:flex;
            flex-wrap:center;
            align-items:center;
            min-width:100%;
            height:120px;
            padding:1rem;
            margin-bottom:1rem;
            border-radius:4px;
            resize: none;
            color:#fff;
            border:none;
            outline:none;
            background: var(--bg);
            border:1px solid var(--spicealColor);
            box-shadow: 0 0 4px 0px var(--spicealColor);
        }
    
        & button{
            padding:.5rem 1.5rem;
            background:var(--spicealColor);
            color:#fff;
            &:hover{
               & opacity:.5;
            }
        }    
    }
`
         
