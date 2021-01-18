import styled from 'styled-components'

const ChatingBox = styled.div`
width:100%;
height:100%;
background-color:#F5F5F5;
display:flex;
overflow:hidden;
transition:1s;
`

const SideBar = styled.div`
transition:1s;
width:16%;
height:100%;
background-color:white;
z-index:35;
box-shadow:3px 3px 6px rgb(0,0,0,0.2);
`

const ChatingContainer = styled.div`
width:80%;
height:100%;
`

const RightSideBar = styled.div`
width:4%;
height:100%;
background-color:#00ABEB;
z-index:40;
`

const UnderBar = styled.div`
width:100%;
height:10%;
position:absolute;
background-color:white;
bottom:0;
z-index:35;
box-shadow:0px -3px 6px rgb(0,0,0,0.2);
display:flex;
justify-content:center;
align-items:center;
transition:1s;
`

const InputChatBox = styled.div`
width:38%;
height:50%;
border:none;
display:flex;
`

const InputChat = styled.input`
width:80%;
height:100%;
padding:0 0;
border: 1px solid #B1ACAC;
border-radius:10px 0px 0px 10px;
outline:none;
padding: 0 3%;
font-size:1.7vmin;
color:rgb(0,0,0);
transition:1s;
::placeholder{
    color:rgb(150,150,150);
}
`

const SendChatBtn = styled.button`
width:10%;
height:105%;
/* background:linear-gradient(#5E5E5E, rgb(70,70,70)); */
background-color:rgb(70,70,70);
border:none;
outline:none;
border:1px solid #5E5E5E;
border-radius:0px 10px 10px 0px;
color:white;
font-size:2vmin;
cursor: pointer;
`

const SettingChat = styled.div`
width:100%;
height:40%;
`

const SettingMenu = styled.div`
height:12%;
display:flex;
align-items:center;
padding:0 10%;
font-size:1.4vmin;
color:#ACACAC;
i{
    padding:0 3%;
    color:#ACACAC;
}
img{
    width:100%;
    height:10%;
}
`

const SettingChoose = styled.button`
padding:4% 0%;
background-color:#F6F6F6;
border-bottom:1px solid whitesmoke;
width:100%;
border:none;    
color:rgb(170,170,170);
box-shadow:0px -3px 3px rgb(0,0,0,0.1);
font-size:1.3vmin;
outline:none;
cursor: pointer;
transition:0.5s;
font-size:1.2vmin;
:hover{
    color:tomato;
}
i{
    margin-right:1%;
}
`

const UploadBox = styled.div`
padding:6% 0%;
background-color:#F6F6F6;
border-bottom:1px solid whitesmoke;
width:100%;
border:none;    
color:rgb(0,0,0,0.4);
box-shadow:0px -3px 3px rgb(0,0,0,0.1);
font-size:1.3vmin;
outline:none;
cursor: pointer;
transition:0.5s;
font-size:1.2vmin;
display:flex;
justify-content:center;
align-items:center;
input{
    border:none;
    z-index:40;
}
`
export{
    ChatingBox,
    SideBar,
    ChatingContainer,
    RightSideBar,
    UnderBar,
    InputChatBox,
    InputChat,
    SendChatBtn,
    SettingChat,
    SettingMenu,
    SettingChoose,
    UploadBox
}