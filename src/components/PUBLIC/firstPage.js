import React from 'react';
import * as f from '../STYLECOMPONENT/publicStyle'
import {Link, BrowserRouter} from 'react-router-dom'

function FirstPage(Lang){
    console.log('sldkfj')
    console.log(Lang.Lan)
    const a = Lang.Lang;
    const LinkStyle = {position:"relative", width:"100%", height:"100%"}
    return(
        <f.FirstPageContainer>
            <h1> FRANDOM!</h1>
            <h3>{(a==0)?"Enjoy random chat with foreigners!" : "외국인과의 랜덤채팅을 즐겨보세요!"}</h3>
            <f.ButtonContainer>
                <Link style={LinkStyle} to="/nickname"><f.StartButton>{(a==0)?"GET START" : "시작하기"}</f.StartButton></Link> 
            </f.ButtonContainer>
        </f.FirstPageContainer>
    )
}

export default FirstPage;