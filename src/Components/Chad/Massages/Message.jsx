import React from 'react'
import { BottomMenu, Buttons, DataContainer, Dot, Emoji, EntrMsg, Main, MsgBar, Name, Pin, Send, SendBtn, TopBar, TopMenu, UserImg } from './Message.style'

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
            <BottomMenu></BottomMenu>
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
