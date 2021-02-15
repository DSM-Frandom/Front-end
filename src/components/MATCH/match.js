import React from 'react'
import * as s from './styles'
import {Link} from 'react-router-dom'

const Match=()=>{
    const LinkStyle = { position:"absolute", width:"13%", height:"6%", marginBottom : "37%"}
    return(
        <s.Background>
            <s.Title>FRANDOM!</s.Title>
            <Link style={LinkStyle} to="/chating"><s.MatchButton>랜덤채팅 시작!</s.MatchButton></Link>
        </s.Background>
    )
}

export default Match;