import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import * as f from '../STYLECOMPONENT/publicStyle'
import Loading from './loading'

function NicknamePage(Lang){
    const a = Lang.Lang;
    const [toggle, setToggle] = useState();
    const LinkStyle = {position:"relative", width:"100%", height:"100%"}
    const changeToggle =()=>{setToggle(1);}
    return(
        <f.FirstPageContainer>
            {(toggle==1)&&<Loading></Loading>}
            <h1> FRANDOM!</h1>
            <f.NicknameInput placeholder={(a==0)?"NICKNAME" : "아이디를 입력하세요."}></f.NicknameInput>
            <f.NicknameInput placeholder={(a==0)?"NICKNAME" : "비밀번호를 입력하세요."}></f.NicknameInput>
            <f.ButtonContainer2>
            <Link style={LinkStyle} to="/chating"><f.NickSubButton onClick={changeToggle}>{(a==0)?"SUBMIT" : "제출하기"}</f.NickSubButton></Link>
            </f.ButtonContainer2>
            <Link to="/signup"><h3>계정이 없으신가요?</h3></Link>
        </f.FirstPageContainer>
    )
}

export default NicknamePage;