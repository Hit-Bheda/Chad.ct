import styled from 'styled-components'
import Img from '../../../assets/User.svg'
import DotMenu from '../../../assets/Use.svg'
import PinImg from '../../../assets/Pin.png'
import EmojiImg from '../../../assets/Emoji.png'
import SendImg from '../../../assets/Send.png'

export const Main = styled.div`
    width: 51%;
    height: 100%;
    border-right: 1px solid #565D66;
    `

export const TopBar = styled.div`
    padding: .4rem;
    width: 100%;
    height: 11%;
    border-bottom: 1px solid #565D66;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

export const UserImg = styled.img.attrs({ src:Img })`
    width: 3.2rem;
`

export const DataContainer = styled.div`
    width: 90%;
    height: 90%;
    display:flex;
    align-items: center;
    justify-content: space-between;
`

export const TopMenu = styled.div`
    display: flex;
    flex-direction:column;
    align-items:start;
    justify-content: center;
    width:25%;
    height: 100%;
`

export const Name = styled.h1`
    font-weight: 500;
    font-size: 1.2rem;
    color:#fff;
`

export const Dot = styled.img.attrs({ src:DotMenu})`
 width:.3rem;
`

export const BottomMenu = styled.div`
    width:100%;
    height:89%;
    background: firebrick;
`

export const MsgBar = styled.div`
    width: 40rem;
    height:3rem;
    position:absolute;
    top:94%;
    left:52.5%;
    transform:translate(-50%,-50%);
    background:rgba(255,255,255,.05);
    border-radius:1rem;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 0 1rem ;
`

export const EntrMsg = styled.input.attrs({
    placeholder:"Type A Message...."
})`
    width: 80%;
    height:100%;
    border:none;
    outline:none;
    color:#fff;
    background:transparent;
    font-size:1rem;
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 23%;
    height: 100%;
    
`

export const Pin = styled.img.attrs({
    src:PinImg
})`
    width:1.3rem;
    cursor:pointer;
`;

export const Emoji = styled.img.attrs({
    src:EmojiImg
})`
width:1.3rem;
cursor:pointer;
`;

export const SendBtn = styled.div`
    width:5rem;
    height: 2.5rem;
    background: #6930C3;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 1rem;
    font-size:.9rem;
    padding:.7rem;
    color:#fff;
    cursor:pointer;
`
export const Send = styled.img.attrs({
    src:SendImg
})`
width:1.2rem;

`; 