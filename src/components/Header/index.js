import {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'
import LogOutPopup from '../LogoutPopup'
import MenuPopup from '../MenuPopup'
import './index.css'
import {
  HeaderMainContainer,
  LogoImgContainer,
  HeaderContainer,
  LogoImg,
  HeaderRightContainer,
  ThemeContainer,
  UserAccountImg,
  ThemeButton,
} from './styledComponents'
import NxtWatchContext from '../../context/nxtWatchContext'

class Header extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {toggleDark} = value
          const onToggleTheme = () => {
            toggleDark()
          }
          return (
            <HeaderMainContainer DarkTheme={value.isDarkTheme}>
              <HeaderContainer>
                <LogoImgContainer>
                  <Link to="/">
                    <LogoImg
                      src={
                        value.isDarkTheme
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      }
                      alt="website logo"
                    />
                  </Link>
                </LogoImgContainer>
                <HeaderRightContainer>
                  <ThemeContainer>
                    <ThemeButton
                      type="button"
                      data-testid="theme"
                      onClick={onToggleTheme}
                    >
                      {value.isDarkTheme && (
                        <FiSun color="#f9f9f9" size="25" className="icons" />
                      )}
                      {!value.isDarkTheme && (
                        <FaMoon size="25" className="icons" />
                      )}
                    </ThemeButton>
                  </ThemeContainer>
                  <UserAccountImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <MenuPopup value={value} />
                  {/* <GiHamburgerMenu
                  className="GiHamburgerMenu"
                  size="25"
                  fill={value.isDarkTheme ? 'white' : 'black'}
                /> */}

                  <LogOutPopup />
                </HeaderRightContainer>
              </HeaderContainer>
            </HeaderMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default withRouter(Header)
