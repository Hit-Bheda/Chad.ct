import React from 'react'
import { IconImg, Icons, Main } from './sidebar.style'
import Home from '../../../assets/home.png'
import Msg from '../../../assets/msg.png'
import Stg from '../../../assets/setting.png'
import User from '../../../assets/usr.png'
function SideBar() {
  return (
    <>
     <Main>
        <Icons>
          <IconImg src={Home}></IconImg> 
          <IconImg src={Msg}></IconImg> 
          <IconImg src={Stg}></IconImg> 
          <IconImg src={User}></IconImg> 


        </Icons>
      </Main> 

    </>
  )
}

export default SideBar
