import {Component} from 'react'
import './index.css'
import {AiFillHome} from 'react-icons/ai'
import {FaFire, FaGamepad} from 'react-icons/fa'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  SidebarMainContainer,
  SidebarList,
  SidebarListItem,
  SidebarListItemContainer,
  SidbarLabel,
  SocialContainer,
  SocialHeading,
  SocialMediaContainer,
  SocialMediaImg,
  SocialMediaDescription,
} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'

class Sidebar extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const onHomeSelect = () => {
            value.changeSelectedRoute('home')
          }

          const onTrendingSelect = () => {
            value.changeSelectedRoute('trending')
          }

          const onGamingSelect = () => {
            value.changeSelectedRoute('gaming')
          }

          const onSavedSelect = () => {
            value.changeSelectedRoute('saved-videos')
          }
          const IconClassName = value.DarkTheme
            ? 'icons DarkThemeIcon'
            : 'icons LightThemeIcon'
          return (
            <SidebarMainContainer>
              <SidebarList>
                <SidebarListItem
                  highlight={value.selectedRoute === 'home'}
                  onClick={onHomeSelect}
                  DarkTheme={value.isDarkTheme}
                >
                  <SidebarListItemContainer to="/">
                    <AiFillHome
                      className={
                        value.selectedRoute === 'home'
                          ? 'icons HighlightThemeIcon'
                          : IconClassName
                      }
                    />
                    <SidbarLabel
                      DarkTheme={value.isDarkTheme}
                      highlight={value.selectedRoute === 'home'}
                    >
                      Home
                    </SidbarLabel>
                  </SidebarListItemContainer>
                </SidebarListItem>
                <SidebarListItem
                  highlight={value.selectedRoute === 'trending'}
                  onClick={onTrendingSelect}
                  DarkTheme={value.isDarkTheme}
                >
                  <SidebarListItemContainer to="/trending">
                    <FaFire
                      className={
                        value.selectedRoute === 'trending'
                          ? 'icons HighlightThemeIcon'
                          : IconClassName
                      }
                    />
                    <SidbarLabel
                      DarkTheme={value.isDarkTheme}
                      highlight={value.selectedRoute === 'trending'}
                    >
                      Trending
                    </SidbarLabel>
                  </SidebarListItemContainer>
                </SidebarListItem>
                <SidebarListItem
                  highlight={value.selectedRoute === 'gaming'}
                  onClick={onGamingSelect}
                  DarkTheme={value.isDarkTheme}
                >
                  <SidebarListItemContainer to="/gaming">
                    <FaGamepad
                      className={
                        value.selectedRoute === 'gaming'
                          ? 'icons HighlightThemeIcon'
                          : IconClassName
                      }
                    />
                    <SidbarLabel
                      DarkTheme={value.isDarkTheme}
                      highlight={value.selectedRoute === 'gaming'}
                    >
                      Gaming
                    </SidbarLabel>
                  </SidebarListItemContainer>
                </SidebarListItem>
                <SidebarListItem
                  highlight={value.selectedRoute === 'saved-videos'}
                  onClick={onSavedSelect}
                  DarkTheme={value.isDarkTheme}
                >
                  <SidebarListItemContainer to="/saved-videos">
                    <MdPlaylistAdd
                      className={
                        value.selectedRoute === 'saved-videos'
                          ? 'icons HighlightThemeIcon'
                          : IconClassName
                      }
                    />
                    <SidbarLabel
                      DarkTheme={value.isDarkTheme}
                      highlight={value.selectedRoute === 'saved-videos'}
                    >
                      Saved Videos
                    </SidbarLabel>
                  </SidebarListItemContainer>
                </SidebarListItem>
              </SidebarList>
              <SocialContainer>
                <SocialHeading DarkTheme={value.isDarkTheme}>
                  CONTACT US
                </SocialHeading>
                <SocialMediaContainer>
                  <SocialMediaImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContainer>
                <SocialMediaDescription DarkTheme={value.isDarkTheme}>
                  Enjoy! Now to see your channels and recommendations!
                </SocialMediaDescription>
              </SocialContainer>
            </SidebarMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Sidebar
