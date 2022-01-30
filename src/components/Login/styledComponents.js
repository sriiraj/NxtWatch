import styled from 'styled-components'

export const LoginMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${props => (props.DarkTheme ? '#212121' : 'transparent')};
`
export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  width: 85%;
  max-width: 450px;
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => (props.DarkTheme ? '#0f0f0f' : 'transparent')};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  @media screen and (min-width: 767px) {
    padding: 45px;
  }
`
export const LoginImgContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 27px;
`
export const LoginImg = styled.img`
  width: 47%;
`
export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const InputContainer = styled.div`
  margin-top: 11px;
  margin-bottom: 11px;
  display: flex;
  flex-direction: column;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: ${props => (props.DarkTheme ? '#f1f5f9' : '#475569')};
  margin-bottom: 7px;
  text-align: start;
`
export const InputElement = styled.input`
  padding: 10px 12px;
  border-style: solid;
  border-radius: 2.5px;
  background-color: transparent;
  outline-style: none;
  border-width: 1.8px;
  border-color: ${props => (props.DarkTheme ? '#1e293b' : '#e2e8f0')};
  color: ${props => (props.DarkTheme ? 'white' : 'black')}; ;
`
export const CheckBoxCont = styled.div`
  display: flex;
  align-items: center;
`
export const CheckBox = styled.input``

export const CheckBoxLabel = styled.label`
  font-weight: 500;
  font-size: 11px;
  margin-left: 5px;
  color: ${props => (props.DarkTheme ? '#f1f5f9' : '#1e293b')};
  @media screen and (min-width: 767px) {
    font-size: 14px;
  }
`

export const LoginButton = styled.button`
  padding: 10px;
  background-color: #3b82f6;
  color: #ffffff;
  border-radius: 10px;
  border: 0px;
  margin-top: 27px;
  font-weight: 500;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  align-self: start;
  font-size: 20px;
  margin-top: 3px;
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-size: 12px;
  color: #ff0b37;
`
