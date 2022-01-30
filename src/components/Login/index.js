import {Component} from 'react'
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  LoginMainContainer,
  LoginContainer,
  LoginImgContainer,
  LoginImg,
  LoginForm,
  Form,
  InputContainer,
  Label,
  InputElement,
  CheckBoxCont,
  CheckBox,
  CheckBoxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    InputUsername: '',
    InputPassword: '',
    ShowPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  OnChangeUserName = event => {
    this.setState({InputUsername: event.target.value})
  }

  OnChangePassword = event => {
    this.setState({InputPassword: event.target.value})
  }

  OnClickCheckBox = () => {
    this.setState(prevState => ({
      ShowPassword: !prevState.ShowPassword,
    }))
  }

  DisplayPassWord = () => {
    const {ShowPassword} = this.state
    if (ShowPassword) {
      return 'text'
    }
    return 'password'
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  ValidateLoginCredentials = async () => {
    const {InputUsername, InputPassword} = this.state
    const username = InputUsername
    const password = InputPassword
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  SubmitForm = event => {
    event.preventDefault()
    this.ValidateLoginCredentials()
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            InputUsername,
            InputPassword,
            errorMsg,
            showSubmitError,
          } = this.state
          return (
            <LoginMainContainer DarkTheme={value.isDarkTheme}>
              <LoginContainer DarkTheme={value.isDarkTheme}>
                <LoginImgContainer>
                  <LoginImg
                    alt="website logo"
                    src={
                      value.isDarkTheme
                        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                    }
                  />
                </LoginImgContainer>
                <LoginForm>
                  <Form onSubmit={this.SubmitForm}>
                    <InputContainer>
                      <Label
                        htmlFor="UserNameElement"
                        DarkTheme={value.isDarkTheme}
                      >
                        USERNAME
                      </Label>
                      <InputElement
                        type="text"
                        id="UserNameElement"
                        placeholder="Username"
                        onChange={this.OnChangeUserName}
                        value={InputUsername}
                        DarkTheme={value.isDarkTheme}
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label
                        htmlFor="PasswordElement"
                        DarkTheme={value.isDarkTheme}
                      >
                        PASSWORD
                      </Label>
                      <InputElement
                        type={this.DisplayPassWord()}
                        id="PasswordElement"
                        placeholder="Password"
                        onChange={this.OnChangePassword}
                        value={InputPassword}
                        DarkTheme={value.isDarkTheme}
                      />
                    </InputContainer>
                    <CheckBoxCont>
                      <CheckBox
                        id="showPassword"
                        type="checkbox"
                        onChange={this.OnClickCheckBox}
                      />
                      <CheckBoxLabel
                        htmlFor="showPassword"
                        DarkTheme={value.isDarkTheme}
                      >
                        Show Password
                      </CheckBoxLabel>
                    </CheckBoxCont>
                    <LoginButton type="submit">Login</LoginButton>
                    {showSubmitError && <ErrorMsg>* {errorMsg}</ErrorMsg>}
                  </Form>
                </LoginForm>
              </LoginContainer>
            </LoginMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Login
