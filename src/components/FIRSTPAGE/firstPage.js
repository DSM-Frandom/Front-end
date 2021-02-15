import React, { useEffect } from 'react';
import * as f from '../STYLECOMPONENT/publicStyle'
import {Link} from 'react-router-dom'

function FirstPage(Lang){
    const a = Lang.Lang;
    const LinkStyle = {position:"relative", width:"100%", height:"100%"}
    useEffect(()=>{
        window.localStorage.setItem("token"," ")
    })
    return(
        <f.FirstPageContainer>
            <h1> FRANDOM!</h1>
            <h3>{(a===0)?"Enjoy random chat" : "랜덤채팅을 즐겨보세요!"}</h3>
            <f.ButtonContainer>
                <Link style={LinkStyle} to="/nickname"><f.StartButton>{(a===0)?"GET START" : "시작하기"}</f.StartButton></Link> 
            </f.ButtonContainer>
        </f.FirstPageContainer>
    )
}

export default FirstPage;