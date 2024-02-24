import styled from "styled-components";
import User from '../../../assets/User.svg'
import Menu from '../../../assets/Use.svg'

export const Colors = {
    bc : '#565D66',
}
export const Main = styled.div`
  width:100%;
  height:4rem;
  // background:blue;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 .5rem;
  border-bottom:1px solid ${Colors.bc};
  transition: .3s ease-in-out;
  &:hover{
    background: #494949;
    cursor: pointer;
  }
`
export const Img = styled.img.attrs({
  src:User
})`
  width:3rem;
`
export const Name = styled.div`
  width:50%;
  height:80%;
  display:flex;
  flex-direction:column;
  align-items:start;
  justify-content:space-between;
  // background:red;
`

export const Heading = styled.h3`
  font-weight:500;
  font-size:1rem;
  color:#fff;
`
export const Msg = styled.p`
  font-size:.6rem;
  opacity:.4;
  margin-bottom:.3rem;
  color:#fff;
`

export const Side = styled.div`
  width:20%;
  height:40%;
  // background:green;
  display:flex;
  align-items: center;
  justify-content:space-between;
  margin-bottom:1rem;
`
export const DotMenu = styled.img.attrs({
  src:Menu
})`
  width:.3rem;
`
export const Time = styled.p`
  font-size:.6rem;
  opacity:.4;
  color:#fff;
  height:.6rem;
`
