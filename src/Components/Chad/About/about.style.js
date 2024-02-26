import styled from 'styled-components'
import Img from '../../../assets/User.svg'
export const Colors = {
    bc : '#565D66',
}
export const Main = styled.div`
    width: 22%;
    height: 100%;
`
export const UserContainer = styled.div`
    width: 100%;
    /* height:50%; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding:2rem;
    border-bottom:1px solid ${Colors.bc}; 
`
export const UserImg = styled.img.attrs({src:Img})`
    width: 6rem;
`
export const UserName = styled.div`
    font-size: 1.8rem;
    text-align: center;
    color: #fff;

`
export const UserData = styled.div`
    font-size: .6rem;
    text-align: center;
    color: #fff;
    width:90%;
`