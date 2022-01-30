import {Component} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header'
import Sidebar from '../sidebar'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  NotFoundMainContainer,
  NotFoundOuterContainer,
  SideBarContainer,
  NotFoundInnerMainContainer,
  NotFoundInnerContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDesc,
  NotFoundPageContainer,
} from './styledComponent'

class NotFound extends Component {
  state = {
    isLoggedIn: false,
  }

  componentDidMount() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      this.setState({isLoggedIn: false})
    } else {
      this.setState({isLoggedIn: true})
    }
  }

  getStyle = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn) {
      return {width: '100%'}
    }
    return {width: '100%', height: '100vh'}
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => (
          <NotFoundMainContainer>
            {isLoggedIn && <Header />}
            <NotFoundOuterContainer>
              {isLoggedIn && (
                <SideBarContainer DarkTheme={value.isDarkTheme}>
                  <Sidebar />
                </SideBarContainer>
              )}
              <NotFoundInnerMainContainer
                DarkTheme={value.isDarkTheme}
                style={this.getStyle()}
              >
                <NotFoundInnerContainer>
                  <NotFoundPageContainer isDark={value.isDarkTheme}>
                    <NotFoundImage
                      src={
                        value.isDarkTheme
                          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                      }
                      alt="not found"
                    />
                    <NotFoundHeading DarkTheme={value.isDarkTheme} isDarkTheme>
                      Page Not Found
                    </NotFoundHeading>
                    <NotFoundDesc DarkTheme={value.isDarkTheme}>
                      we are sorry, the page you requested could not be found.
                    </NotFoundDesc>
                  </NotFoundPageContainer>
                </NotFoundInnerContainer>
              </NotFoundInnerMainContainer>
            </NotFoundOuterContainer>
          </NotFoundMainContainer>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}

export default NotFound
