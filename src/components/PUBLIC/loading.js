import React, { useState, useEffect } from 'react';
import * as f from '../STYLECOMPONENT/publicStyle'

function Loading(){
    let i = 0;
    const LoadArr = [0,30,60,90,120,150,180,210,240,270,300,330];
    const LoadDisplay = LoadArr.map((e)=>(<f.LoadingBar style={{transform:"rotate(" + e + "deg)"}}><f.LoadingBarCont></f.LoadingBarCont></f.LoadingBar>));
    useEffect(()=>{
        let load = document.getElementById('loading');
            setInterval(() => {
                if(i!=0){
                    load.children[i-1].children[0].style.height = "40%";
                }
                else{
                    load.children[11].children[0].style.height = "40%";
                }
                load.children[i].children[0].style.height = "70%";
                i++;
                if(i==12){
                    i=0;
                }
            }, 80);
    })
    return(
        <f.Loading id="loading">
            {LoadDisplay}
            <f.LoadingText>Now loading....</f.LoadingText>
        </f.Loading>
    )
}

export default Loading;