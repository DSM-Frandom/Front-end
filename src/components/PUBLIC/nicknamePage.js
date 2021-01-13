import React from 'react';
import * as f from '../STYLECOMPONENT/firstPageStyle'

function NicknamePage(Lang){
    const a = Lang.Lang;
    console.log(a)
    return(
        <f.FirstPageContainer>
            <h1> FRANDOM!</h1>
            <h3>{(a==0)?"Please enter a nickname to use." : "사용할 닉네임을 입력해주세요."}</h3>
            <f.NicknameInput placeholder={(a==0)?"NICKNAME" : "사용할 닉네임"}></f.NicknameInput>
        </f.FirstPageContainer>
    )
}

export default NicknamePage;