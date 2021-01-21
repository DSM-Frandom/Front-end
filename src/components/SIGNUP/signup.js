import * as s from "../STYLECOMPONENT/publicStyle"
import {Link} from 'react-router-dom'
import { useEffect, useState } from "react"
import {Request} from '../axios'
import axios from 'axios'
const SignUp =()=>{
    const [val,SetVal] = useState({
        password : '',
        email : '',
        name : ''
    });

    const {password, email, name} = val;
    
    const InputFunc =(e)=>{
        const {value, name} = e.target;
        SetVal({
            ...val,
            [name] : value
        })
    }
    const SignUpFunc=()=>{
        Request("POST","v1/auth/register",{"Content-Type": "application/json"},
        {"username": val.name, "email": val.email, "password": val.password}
        ) 
    }
    const LinkStyle = {position:"relative", width:"100%", height:"100%"}
    return(
        <s.FirstPageContainer>
            <h1>FRANDOM!</h1>
            <s.NicknameInput name="email" placeholder="이메일을 입력하세요."onChange={InputFunc} value={email}></s.NicknameInput>
            <s.NicknameInput name="password" placeholder="비밀번호를 입력하세요."onChange={InputFunc} value={password}></s.NicknameInput>
            <s.NicknameInput name="name" placeholder="닉네임을 입력하세요."onChange={InputFunc} value={name}></s.NicknameInput>
            <s.ButtonContainer2>
            <Link style={LinkStyle} /* to="/chating" */ to="/signup"><s.NickSubButton onClick={SignUpFunc}>제출하기</s.NickSubButton></Link>
            </s.ButtonContainer2>
        </s.FirstPageContainer>
    )
}

export default SignUp;