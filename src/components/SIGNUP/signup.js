import * as s from "../STYLECOMPONENT/publicStyle"
import { useState } from "react"
import { Request } from '../axios'
import Loading from '../PUBLIC/loading'
const SignUp = () => {
    const [val, SetVal] = useState({
        password: '',
        email: '',
        name: ''
    });
    const [toggle, setToggle] = useState(false)

    const { password, email, name } = val;

    const InputFunc = (e) => {
        const { value, name } = e.target;
        SetVal({
            ...val,
            [name]: value
        })
    }
    const SignUpFunc = () => {
        setToggle(true)
        Request("POST", "v1/auth/register", { "Content-Type": "application/json" },
            { "username": val.name, "email": val.email, "password": val.password }
        ).then((e) => {
            console.log(e.status)
            window.location.href = "/nickname"
        })
        .catch(() => {
            setToggle(false)
            window.alert("회원가입에 실패했습니다.")
        })
    }
    return (
        <>
            {toggle && <Loading></Loading>}
            <s.FirstPageContainer>
                <h1>FRANDOM!</h1>
                <s.NicknameInput name="email" placeholder="이메일을 입력하세요." onChange={InputFunc} value={email}></s.NicknameInput>
                <s.NicknameInput name="password" placeholder="비밀번호를 입력하세요.(숫자 포함)" onChange={InputFunc} value={password}></s.NicknameInput>
                <s.NicknameInput name="name" placeholder="닉네임을 입력하세요." onChange={InputFunc} value={name}></s.NicknameInput>
                <s.ButtonContainer2>
                    <s.NickSubButton onClick={SignUpFunc}>제출하기</s.NickSubButton>
                </s.ButtonContainer2>
            </s.FirstPageContainer>
        </>
    )
}

export default SignUp;