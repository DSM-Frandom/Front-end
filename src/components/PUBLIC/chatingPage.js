import React, { useState } from 'react';
import * as s from '../STYLECOMPONENT/publicStyle'
import * as c from '../STYLECOMPONENT/chatingStyle'


function ChatingPage(Lang){
    const a = Lang.Lang;
    const [mode, setMode] = useState();
    const DarkMode=()=>{
        setMode('dark')
    }
    const LightMode=()=>{
        setMode('light')
    }
    return(
        <c.ChatingBox style={{backgroundColor:(mode=='dark')?'rgb(70,70,70)':''}}>
            <c.SideBar style={{backgroundColor:(mode=='dark')?'rgb(50,50,50)':''}}>
                <c.SettingChat>
                    <c.SettingMenu>
                    <i class="fas fa-cloud-moon"></i> {(a==0)?"COLOR THEME" : "색상 테마"}
                    </c.SettingMenu>
                    <c.SettingChoose style={{backgroundColor:(mode=='dark')?'rgb(100,100,100)':''}} onClick={DarkMode}><i class="fas fa-moon"></i>{(a==0)?"DARK MODE" : "어두운 테마"}</c.SettingChoose>
                    <c.SettingChoose style={{backgroundColor:(mode=='dark')?'rgb(100,100,100)':''}} onClick={LightMode}><i class="fas fa-sun"></i>{(a==0)?"LIGHT MODE" : "밝은 테마"}</c.SettingChoose>
                    <c.SettingMenu>
                    <i class="fas fa-cog"></i>{(a==0)?"SETTING" : "설정"}
                    </c.SettingMenu>
                    <c.SettingChoose style={{backgroundColor:(mode=='dark')?'rgb(100,100,100)':''}}><i class="fas fa-exclamation"></i>{(a==0)?"REPORT" : "신고하기"}</c.SettingChoose>
                    <c.SettingChoose style={{backgroundColor:(mode=='dark')?'rgb(100,100,100)':''}}><i class="fas fa-sign-out-alt"></i>{(a==0)?"EXIT" : "나가기"}</c.SettingChoose>
                </c.SettingChat>
            </c.SideBar>
            <c.ChatingContainer></c.ChatingContainer>
{/*             <c.RightSideBar></c.RightSideBar> */}
            <c.UnderBar style={{backgroundColor:(mode=='dark')?'rgb(50,50,50)':''}}>
                <c.InputChatBox>
                    <c.InputChat style={{backgroundColor:(mode=='dark')?'rgb(100,100,100)':'',  color:(mode=='dark')?'whitesmoke':'',border:(mode=='dark')?'none':''}} placeholder="보낼 내용을 입력하세요!"></c.InputChat>
                    <c.SendChatBtn style={{border:(mode=='dark')?'none':''}}><i class="fas fa-paper-plane"></i></c.SendChatBtn>
                </c.InputChatBox>
            </c.UnderBar>
        </c.ChatingBox>
    )
}

export default ChatingPage;