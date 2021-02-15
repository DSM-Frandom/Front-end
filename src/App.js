import React, { useState } from 'react';
import FirstPage from './components/FIRSTPAGE/firstPage' 
import * as s from './components/STYLECOMPONENT/publicStyle'
import {BrowserRouter,Link,Route, Switch} from 'react-router-dom'
import NicknamePage from './components/PUBLIC/nicknamePage'
import 미국 from './components/IMG/america.png'
import 한국 from './components/IMG/korea.png'
import 언어 from './components/IMG/language.png'
import ChatingPage from './components/CHATINGPAGE/chatingPage'
import GlobalStyled from './style/globalstyle'
import SignUp from './components/SIGNUP/signup'
import Match from './components/MATCH/match'

function App() {
  const [margin, setMargin] = useState("103%");
  const [LValue, setLValue] = useState(1);
  const chooseLanguage =()=>{
    setMargin('92%')
  }
  const korean=()=>{
    setLValue(1)
    setMargin('103%')
  }
  const amarican=()=>{
    setLValue(0)
    setMargin('103%')
  }
  return (
    <BrowserRouter>
    <GlobalStyled></GlobalStyled>
      <s.Background>
        <s.SignUp><Link to="/signup" style={{color:"black", display:"flex",justifyContent:"center",alignItems:"center", width:"100%",height:"100%", marginTop:"0"}}><i className="fas fa-sign-out-alt"></i></Link></s.SignUp>
        <Switch>
        <Route exact path="/"><FirstPage Lang={LValue}></FirstPage></Route>
        <Route exact path="/nickname"><NicknamePage Lang={LValue}></NicknamePage></Route>
        <Route path="/chating"><ChatingPage Lang={LValue}></ChatingPage></Route>
        <Route path="/signup"><SignUp></SignUp></Route>
        <Route path="/nickname/match"><Match></Match></Route>
        </Switch>
        <s.LanguageSlide style={{marginRight:margin,display:"none"}}>
          <button>
            <img src={미국} alt="" onClick={amarican}/>
            <img src={한국} alt="" onClick={korean}/>
            <img src={언어} alt="" onClick={chooseLanguage}/>
          </button>
        </s.LanguageSlide>
{/*         <a>{(a==0)?"Made by dsm, in highschool" : "DSM에서 제작되었습니다."}</a> */}
      </s.Background>
    </BrowserRouter>
  );
}

export default App;
