import styled, { keyframes } from 'styled-components'

const Background = styled.div`
width:100%;
height:100vh;
background-color:#3BCAFF;
overflow:hidden;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
a{
    position:absolute;
    color:white;
    margin-top:45%;
    font-size:1.3vmin;
}
`

const FirstPageContainer = styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
h1{
    color:white;
    font-size:7vmin;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-shadow:0px 3px 3px rgb(20,20,20,0.2);   
    margin-bottom:0.7%;
}
h3{
    margin-top:0;
    text-transform:uppercase;
    color:white;
    font-size:1.5vmin;
}
button{
    border-radius:16px;
    border:none;
    width:100%;
    height:100%;
    background-color:white;
    color:#3BCAFF;
    font-size:2vmin;
    font-weight:bold;
    box-shadow:0px 3px 6px rgb(20,20,20,0.2);
    cursor: pointer;
    outline:none;
} 
`

const ButtonContainer = styled.div`
margin-top:2%;
width:16%;
height:6.5%;
`

const NicknameInput = styled.input`
margin-top:1.5%;
width:15%;
padding:0 1.5%;
height:6%;
border:none;
outline:none;
background-color:white;
font-size:2vmin;
font-weight:bold;
color:gray;
box-shadow:0px 3px 6px rgb(20,20,20,0.2);
::placeholder{
    font-size:2vmin;
    font-weight:bold;
    color:#A7A7A7;
}
:focus{
    border:1px solid yellow;
}
`

const LanguageSlide = styled.div`
width:10%;
height:4%;
background-color:blue;
margin-bottom:44%;
margin-right:89%;
position:absolute;
z-index:30;
background-color:#3BCAFF;
display:flex;
border-radius:24px;
transition:1s;
button{
    width:140%;
    height:100%;
    border:none;
    outline:none;
    background-color:white;
    border-radius:24px;
    display:flex;
    justify-content:space-between;
    padding:0 9%;
    align-items:center;
    cursor: pointer;
    position:sticky;
    img{
        height:50%;
        padding:0px 10%;
        :hover{
            opacity:0.6;
        }
        :last-child{
            :hover{
                opacity:1;
            }
        }
    }
}
`

export{
    Background,
    FirstPageContainer,
    ButtonContainer,
    NicknameInput,
    LanguageSlide
}