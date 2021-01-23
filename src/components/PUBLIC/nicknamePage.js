import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import * as f from '../STYLECOMPONENT/publicStyle'
import {Request} from '../axios'

function NicknamePage(Lang){
    const a = Lang.Lang;
    const LinkStyle = {position:"relative", width:"100%", height:"100%"}
    const [data, setData] = useState({
        id : "",
        password: ""
    });
    const Input=(e)=>{
        const {value, name} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }
    const SubInputValue =()=>{
        Request("POST", "v1/auth/login",{"Content-type":"application/json"}, 
        {
            "email" : data.id,
            "password" : data.password
        })
    }
    return(
        <f.FirstPageContainer>
            <h1> FRANDOM!</h1>
            <f.NicknameInput onChange={Input} name="id" value={data.id} placeholder={(a==0)?"NICKNAME" : "아이디를 입력하세요."}></f.NicknameInput>
            <f.NicknameInput onChange={Input} name="password" value={data.password} placeholder={(a==0)?"NICKNAME" : "비밀번호를 입력하세요."}></f.NicknameInput>
            <f.ButtonContainer2>
            <Link style={LinkStyle} to="/chating"><f.NickSubButton onClick={SubInputValue}>{(a==0)?"SUBMIT" : "제출하기"}</f.NickSubButton></Link>
            </f.ButtonContainer2>
            <Link to="/signup"><h3>계정이 없으신가요?</h3></Link>
        </f.FirstPageContainer>
    )
}

export default NicknamePage;