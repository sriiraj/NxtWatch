import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import styled from 'styled-components'

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
export const StyledPopup = styled(Popup)`
  &-content {
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 280px;
    border: none;
    background-color: ${props => (props.DarkTheme ? '#231f20' : '#f8fafc')};
    @media screen and (min-width: 768px) {
      width: 350px;
    }
  }
`

export const LogOutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  @media screen and (min-width: 768px) {
    padding: 30px;
  }
`
export const LogOutDescription = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  color: ${props => (props.DarkTheme ? '#cccccc' : '#00306e')};
  margin: 0px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const LogOutButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  align-items: center;
  width: 80%;
`
export const LogOutCancelButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding: 8px 12px;
  border-width: 1px;
  border-style: solid;
  color: #94a3b8;
  border-color: #94a3b8;
  outline: none;
  background-color: transparent;
  border-radius: 3px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px 14px;
  }
`
export const LogOutConfirmButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding: 8px 12px;
  border-width: 1px;
  border-style: solid;
  color: white;
  border-color: #3b82f6;
  background-color: #3b82f6;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px 14px;
  }
`
