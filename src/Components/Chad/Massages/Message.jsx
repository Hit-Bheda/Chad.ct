import React from 'react'
import { BottomMenu, Buttons, DataContainer, Dot, Emoji, EntrMsg, Main, MassageContainer, MsgBar, MsgBox, MsgTime, Name, Pin, Send, SendBtn, TopBar, TopMenu, UserDetail, UserImg } from './Message.style'

function Message() {
  return (
    <>
        <Main>
            <TopBar>
                <UserImg></UserImg>
                <DataContainer>
                  <TopMenu>
                    <Name>Hit Bheda</Name>
                  </TopMenu>
                  <Dot></Dot>
                </DataContainer>
            </TopBar>
            <BottomMenu>
              <MassageContainer>
                <UserDetail>
                <UserImg style={{width:"2.5rem"}}></UserImg>
                <Name style={{fontSize:".8rem"}}>Hit Bheda</Name>
                <MsgTime>12:15 PM</MsgTime>
                </UserDetail>
                <MsgBox>It Is What It Is!</MsgBox>
              </MassageContainer>
            </BottomMenu>
            <MsgBar>
              <EntrMsg></EntrMsg>
              <Buttons>
                <Pin></Pin>
                <Emoji></Emoji>
                <SendBtn>Send<Send></Send></SendBtn>
              </Buttons>
            </MsgBar>
        </Main>
    </>
  )
}

export default Message
