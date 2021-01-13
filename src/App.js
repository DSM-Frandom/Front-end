import React, { useState } from 'react';
import FirstPage from './components/PUBLIC/firstPage' 
import * as s from './components/STYLECOMPONENT/firstPageStyle'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import NicknamePage from './components/PUBLIC/nicknamePage'
import 미국 from './components/IMG/america.png'
import 한국 from './components/IMG/korea.png'
import 언어 from './components/IMG/language.png'

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
  const a = LValue;
  return (
    <BrowserRouter>
      <s.Background>
        <Switch>
        <Route exact path="/"><FirstPage Lang={LValue}></FirstPage></Route>
        <Route path="/nickname"><NicknamePage Lang={LValue}></NicknamePage></Route>
        </Switch>
        <s.LanguageSlide style={{marginRight:margin}}>
          <button>
            <img src={미국} alt="" onClick={amarican}/>
            <img src={한국} alt="" onClick={korean}/>
            <img src={언어} alt="" onClick={chooseLanguage}/>
          </button>
        </s.LanguageSlide>
        <a>{(a==0)?"Made by dsm, in highschool" : "DSM에서 제작되었습니다."}</a>
      </s.Background>
    </BrowserRouter>
  );
}

export default App;
