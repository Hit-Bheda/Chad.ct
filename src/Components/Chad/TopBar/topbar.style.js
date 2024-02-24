import styled from 'styled-components'
import LogoImg from '../../../assets/Logo.png'
export const Colors = {
    bc : '#565D66',
}
export const Main = styled.div`
    width: 100%;
    height: 100%;
    background: #252525;
    border-bottom: 1px solid ${Colors.bc};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2vw;
`
export const Logo = styled.img.attrs({
    src: LogoImg
})`
    width:100px;
`

export const UserSec = styled.div`
    width:200px;
    height: 35px;
    background: ${Colors.bc};
`
