import styled from "styled-components";
import Img from '../../../assets/Search.png';
import Img1 from '../../../assets/User.svg';

export const Colors = {
    bc : '#565D66'
}
export const Main = styled.div`
  width:22%;
  height:100%;
  border-right:1px solid ${Colors.bc};
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`
export const Search = styled.div`
  width: 90%;
  height: 40px;
  background: rgba(255,255,255,.05);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: .5rem;
  margin-top: 1rem;
`

export const SearchIn = styled.input.attrs({
  placeholder:"Search"
})`
  font-size: 1rem;
  color:#fff;
  width: 90%;
  background: transparent;
  border:none;
  outline:none;
`

export const SearchImg = styled.img.attrs({
  src:Img
})`
  width:1rem;
  cursor:pointer;
`

export const Active = styled.div`
  width: 100%;
  height:7rem;
  padding:.5rem;
  /* background: red; */
  display:flex;
  flex-direction:column;
  align-items: start;
  justify-content: space-between;
  border-bottom: 1px solid ${Colors.bc};
  padding-right: 0;
`

export const ActiveText = styled.h3`
  font-size:1rem;
  font-weight: 500;
  color: #fff;
  padding: .3rem;
`
export const UserContainer = styled.div`
  display:flex;
  align-items:start;
  overflow-x: scroll;
  /* height: 5rem; */
  width: 100%;
  // background: red;
  overflow-x: auto;
  overflow-y: hidden; /* Hides the vertical scrollbar */
  white-space: nowrap;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  /* Hide scrollbar for Webkit (Chrome, Safari, Edge) */
  &::-webkit-scrollbar {
    display: none;
  } 
`
export const UserImg = styled.img.attrs({
  src:Img1
})`
  width:3rem;
  margin:1%;
`
export const ContactContainer = styled.div`
  width:100%;
  height:100%;
  overflow-y:scroll;
  scrollbar-width: 2px; /* Firefox */
  /* scrollbar-width: thin; */

/* Hide scrollbar for Webkit (Chrome, Safari, Edge) */
&::-webkit-scrollbar {
    width: 4px;
}

&::-webkit-scrollbar-track {
    border-radius: 10px;
}

&::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #494949;
}
`
