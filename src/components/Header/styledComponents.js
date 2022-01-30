import styled from 'styled-components'

export const HeaderMainContainer = styled.div`
  background-color: ${props => (props.DarkTheme ? '#212121' : 'white')};
  box-shadow: ${props =>
    props.DarkTheme
      ? 'rgb(154 154 161 / 20%) 0px 7px 29px 0px'
      : 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100%;
`
export const HeaderContainer = styled.div`
  min-width: 98%;
  padding: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const LogoImgContainer = styled.div`
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    margin: 10px;
  }
`
export const LogoImg = styled.img`
  width: 90px;
  @media screen and (min-width: 768px) {
    width: 110px;
  }
`
export const HeaderRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100px;
  @media screen and (min-width: 768px) {
    min-width: 200px;
  }
`
export const ThemeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const UserAccountImg = styled.img`
  width: 35px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`

export const LogoutContainer = styled.div`
  display: flex;
  align-items: center;
`

export const LogoutButton = styled.button`
  background-color: transparent;
  color: ${props => (props.DarkTheme ? 'white' : '#3b82f6')};
  border-width: 3px;
  border-style: solid;
  border-color: ${props => (props.DarkTheme ? 'white' : '#3b82f6')};
  padding: 7px 15px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  border-radius: 3px;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
