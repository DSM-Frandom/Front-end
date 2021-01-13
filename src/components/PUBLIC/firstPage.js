import React from 'react';
import * as f from '../STYLECOMPONENT/firstPageStyle'
import {Link, BrowserRouter} from 'react-router-dom'

function FirstPage(Lang){
    console.log('sldkfj')
    console.log(Lang.Lan)
    const a = Lang.Lang;
    const LinkStyle = {position:"relative", width:"100%", height:"100%"}
    return(
        <f.FirstPageContainer>
            <h1> FRANDOM!</h1>
            <f.ButtonContainer>
                <Link style={LinkStyle} to="/nickname"><button>{(a==0)?"GET START" : "시작하기"}</button></Link> 
            </f.ButtonContainer>
        </f.FirstPageContainer>
    )
}

export default FirstPage;