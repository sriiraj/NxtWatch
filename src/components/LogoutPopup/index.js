import 'reactjs-popup/dist/index.css'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import './index.css'
import {
  LogoutContainer,
  LogoutButton,
  StyledPopup,
  LogOutContainer,
  LogOutDescription,
  LogOutButtonContainer,
  LogOutCancelButton,
  LogOutConfirmButton,
} from './styledComponents'
import NxtWatchContext from '../../context/nxtWatchContext'

const LogOutPopup = props => {
  const LogoutConfirm = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => (
        <StyledPopup
          DarkTheme={value.isDarkTheme}
          className="popup-content"
          trigger={
            <LogoutContainer>
              <LogoutButton type="button" DarkTheme={value.isDarkTheme}>
                Logout
              </LogoutButton>
              <FiLogOut
                className="FiLogOut"
                size="25"
                color={value.isDarkTheme ? 'white' : 'black'}
              />
            </LogoutContainer>
          }
          modal
        >
          {close => (
            <LogOutContainer>
              <LogOutDescription DarkTheme={value.isDarkTheme}>
                Are you sure, you want to logout
              </LogOutDescription>
              <LogOutButtonContainer>
                <LogOutCancelButton type="button" onClick={close}>
                  Cancel
                </LogOutCancelButton>
                <LogOutConfirmButton onClick={LogoutConfirm} type="button">
                  Confirm
                </LogOutConfirmButton>
              </LogOutButtonContainer>
            </LogOutContainer>
          )}
        </StyledPopup>
      )}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(LogOutPopup)
