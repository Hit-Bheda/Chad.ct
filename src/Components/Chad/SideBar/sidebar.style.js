import styled from "styled-components";
export const Colors = {
    bc : '#565D66',
}
export const Main = styled.div`
  width:5%;
  height:100%;
  border-right:1px solid ${Colors.bc}; 
  display:flex;
  align-items:center;
  justify-content:center;
 `
export const Icons = styled.div`
  width:90%;
  height:40%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
  margin-bottom:25vh;
  
`
export const IconImg = styled.img`
  width:1.3rem;
  &:hover{
    cursor: pointer;
  }
`
