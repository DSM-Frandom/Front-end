import React, { useState, useEffect } from 'react';
import * as c from '../STYLECOMPONENT/chatingStyle'
import { io } from "socket.io-client";

const socket = io("ws://3.12.85.2:3000/", {
    query: {
        token: "Bearer " + window.localStorage.getItem("token")
    }
});

function ChatingPage(Lang) {
    const a = Lang.Lang;
    const [mode, setMode] = useState();
    const DarkMode = () => {
        setMode('dark')
    }
    const LightMode = () => {
        setMode('light')
    }
    const [Chating, setChating] = useState([{you:"",me:""}])

    const [data, setData] = useState("");

    useEffect(() => {
        // 소켓 연결
        socket.on("connect", () => {
            console.log("connect");
            socket.emit("search");
        });

        socket.on("disconnect", () => {
            console.log("disconnect");
        });
        // 방 찾기  
        socket.emit("search", () => {
            console.log("search");
        });

        // 조인 룸
        socket.on("joinRoom", (nickname) => {
            console.log("join Room")
            console.log(nickname)
        })
    }, [])

    // 메세지 받기
    socket.on("receiveMessage", (e) => {
        console.log('메세지')
        setChating([
            ...Chating,
            {you:e,me:""}
        ])
        console.log(e)
    })

    const Sub = (e) => {
        setData(e.target.value);
    }

    const Send = (e) => {
        e.preventDefault();
        setChating([
            ...Chating,
            {you:false,me:data}
        ])
        socket.emit("sendMessage", data)
        setData("")
    }
    const SendInput = (e) => {
        if (e.key === "Enter") {
            setChating([
                ...Chating,
                {you:false,me:data}
            ])
            socket.emit("sendMessage", data)
            setData("")
            console.log(Chating)
        }
    }

    return (
        <c.ChatingBox style={{ backgroundColor: (mode === 'dark') ? 'rgb(70,70,70)' : '' }}>
            <c.SideBar style={{ backgroundColor: (mode === 'dark') ? 'rgb(50,50,50)' : '' }}>
                <c.SettingChat>
                    <c.SettingMenu>
                        <i className="fas fa-cloud-moon"></i> {(a === 0) ? "COLOR THEME" : "색상 테마"}
                    </c.SettingMenu>
                    <c.SettingChoose style={{ backgroundColor: (mode === 'dark') ? 'rgb(100,100,100)' : '' }} onClick={DarkMode}><i className="fas fa-moon"></i>{(a === 0) ? "DARK MODE" : "어두운 테마"}</c.SettingChoose>
                    <c.SettingChoose style={{ backgroundColor: (mode === 'dark') ? 'rgb(100,100,100)' : '' }} onClick={LightMode}><i className="fas fa-sun"></i>{(a === 0) ? "LIGHT MODE" : "밝은 테마"}</c.SettingChoose>
                    <c.SettingMenu>
                        <i className="fas fa-cog"></i>{(a === 0) ? "SETTING" : "설정"}
                    </c.SettingMenu>
                    <c.SettingChoose style={{ backgroundColor: (mode === 'dark') ? 'rgb(100,100,100)' : '' }}><i className="fas fa-exclamation"></i>{(a === 0) ? "REPORT" : "신고하기"}</c.SettingChoose>
                    <c.SettingChoose style={{ backgroundColor: (mode === 'dark') ? 'rgb(100,100,100)' : '' }}><i className="fas fa-sign-out-alt"></i>{(a === 0) ? "EXIT" : "나가기"}</c.SettingChoose>
                    <c.SettingChoose
                        onClick={() => {
                            window.localStorage.setItem("token", " ")
                            window.location.href = "/";
                        }}
                        style={{ backgroundColor: (mode === 'dark') ? 'rgb(100,100,100)' : '' }}>{(a === 0) ? "LOGOUT" : "로그아웃"}</c.SettingChoose>
                </c.SettingChat>
            </c.SideBar>
            <c.ChatingContainer>
                <c.Chating>
                    {Chating.map((res, index)=>{
                        return(
                            <div key ={index}>
                            {res.me !== "" && res !== "" && <c.MyChating>{res.me}</c.MyChating>}
                            {res.me === "" && res.you !== "" && <c.YouChating>{res.you}</c.YouChating>}
                            </div>
                        )
                    })}
                </c.Chating>
            </c.ChatingContainer>
            <c.UnderBar style={{ backgroundColor: (mode === 'dark') ? 'rgb(50,50,50)' : '' }}>
                <c.InputChatBox>
                    <c.InputChat value={data} onKeyPress={SendInput} onChange={Sub} style={{ backgroundColor: (mode === 'dark') ? 'rgb(100,100,100)' : '', color: (mode === 'dark') ? 'whitesmoke' : '', border: (mode === 'dark') ? 'none' : '' }} placeholder="보낼 내용을 입력하세요!"></c.InputChat>
                    <c.SendChatBtn onClick={Send} style={{ border: (mode === 'dark') ? 'none' : '' }}><i className="fas fa-paper-plane"></i></c.SendChatBtn>
                </c.InputChatBox>
            </c.UnderBar>
        </c.ChatingBox>
    )
}

export default ChatingPage;