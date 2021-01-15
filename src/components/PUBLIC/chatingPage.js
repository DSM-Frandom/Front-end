import React, { useState } from 'react';
import * as s from '../STYLECOMPONENT/publicStyle'
import * as c from '../STYLECOMPONENT/chatingStyle'


function ChatingPage(){
    const [Img, setImg] = useState('');
    function fileUpload(e){
        console.log(e.target.files[0].name)
        setImg(e.target.files[0].name)
    }
    return(
        <c.ChatingBox>
            <c.SideBar>
                <c.SettingChat>
                    <c.SettingMenu>
                    <i class="fas fa-cloud-moon"></i> 색상 테마
                    </c.SettingMenu>
                    <c.SettingChoose><i class="fas fa-moon"></i>NIGHT</c.SettingChoose>
                    <c.SettingChoose><i class="fas fa-sun"></i>MORNIG</c.SettingChoose>
                    <c.SettingMenu>
                    <i class="far fa-images"></i> 배경 설정
                    </c.SettingMenu>
                    <c.UploadBox>
                        <input type="file" onChange={fileUpload}/>
                    </c.UploadBox>
                    <img src={Img} alt=""/>
                </c.SettingChat>
            </c.SideBar>
            <c.ChatingContainer></c.ChatingContainer>
            <c.RightSideBar></c.RightSideBar>
            <c.UnderBar>
                <c.InputChatBox>
                    <c.InputChat placeholder="보낼 내용을 입력하세요!"></c.InputChat>
                    <c.SendChatBtn><i class="fas fa-paper-plane"></i></c.SendChatBtn>
                </c.InputChatBox>
            </c.UnderBar>
        </c.ChatingBox>
    )
}

export default ChatingPage;