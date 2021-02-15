import styled from 'styled-components'

export const Background = styled.div`
width:100%;
height:100%;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
min-width:1000px;
`

export const Title = styled.h1`
color:white;
font-size:7vmin;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
text-shadow:0px 3px 3px rgb(20,20,20,0.2);   
margin-bottom:0.7%;
`

export const MatchButton = styled.button`
width:300px;
height:60px;
background-color:rgb(50, 52, 58);
margin-top:30px;
border:none;
color:white;
font-size:20px;
font-weight:bold;
`