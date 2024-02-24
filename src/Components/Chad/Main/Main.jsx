import React from 'react'
import { BottomDiv, MainDiv, TopDiv } from './main.style'
import TopBar from '../TopBar/TopBar'
import SideBar from '../SideBar/SideBar'
import Chat from '../Chat/Chat'
import Message from '../Massages/Message'
import About from '../About'
 
function Main() {
  return (
    <MainDiv>
       <TopDiv>
        <TopBar/>
       </TopDiv>
        <BottomDiv>
        <SideBar/>
        <Chat/>
        <Message />
        <About/>
        </BottomDiv>
    </MainDiv>
  )
}

export default Main
