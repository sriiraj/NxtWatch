import {Component} from 'react'
import NxtWatchContext from '../../context/nxtWatchContext'
import Header from '../Header'
import Sidebar from '../sidebar'
import VideoItemList from '../VideoListItem'
import FailureView from '../FailureView'
import {
  SavedVideosMainContainer,
  SavedVideosOuterContainer,
  SideBarContainer,
  SavedVideosInnerMainContainer,
  SavedVideosInnerContainer,
  SavedVideosHeaderContainer,
  IconContainer,
  SavedVideosIcon,
  SavedVideosHeading,
  SavedVideosListContainer,
  SavedVideosList,
  NotFoundContainer,
} from './styledComponents'
import {
  NotFoundInnerContainer,
  Image,
  Desc,
  Heading,
} from '../FailureView/styledComponent'

class SavedVideos extends Component {
  RenderSavedVideos = value => {
    if (value.savedVideos.length > 0) {
      return (
        <SavedVideosListContainer>
          <SavedVideosList>
            {value.savedVideos.map(i => (
              <VideoItemList key={i.id} ItemDetails={i} />
            ))}
          </SavedVideosList>
        </SavedVideosListContainer>
      )
    }
    return (
      <NotFoundContainer>
        <NotFoundInnerContainer>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <Heading DarkTheme={value.isDarkTheme}>No saved videos found</Heading>
          <Desc DarkTheme={value.isDarkTheme}>
            You can save your videos while watching them
          </Desc>
        </NotFoundInnerContainer>
      </NotFoundContainer>
    )
  }

  RenderFailureView = value => (
    <FailureView value={value} RetryOnclick={this.getTrendingVideosList} />
  )

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => (
          <SavedVideosMainContainer>
            <Header />
            <SavedVideosOuterContainer>
              <SideBarContainer DarkTheme={value.isDarkTheme}>
                <Sidebar />
              </SideBarContainer>
              <SavedVideosInnerMainContainer
                data-testid="savedVideos"
                DarkTheme={value.isDarkTheme}
              >
                <SavedVideosInnerContainer>
                  {value.savedVideos.length !== 0 && (
                    <SavedVideosHeaderContainer DarkTheme={value.isDarkTheme}>
                      <IconContainer DarkTheme={value.isDarkTheme}>
                        <SavedVideosIcon />
                      </IconContainer>
                      <SavedVideosHeading DarkTheme={value.isDarkTheme}>
                        Saved Videos
                      </SavedVideosHeading>
                    </SavedVideosHeaderContainer>
                  )}
                  {this.RenderSavedVideos(value)}
                </SavedVideosInnerContainer>
              </SavedVideosInnerMainContainer>
            </SavedVideosOuterContainer>
          </SavedVideosMainContainer>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}

export default SavedVideos
