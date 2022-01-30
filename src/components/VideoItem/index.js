import {Component} from 'react'
import {
  VideoListItem,
  VideoItemInnerContainer,
  VideoThumbNailImg,
  VideoItemBodyContainer,
  ChannelProfileImg,
  VideoItemDescription,
  VideoItemTitle,
  VideoItemChannelName,
  VideoItemChannelLargeScreen,
  VideoItemViewCount,
  VideoItemChannelMobileView,
} from './styledComponent'
import NxtWatchContext from '../../context/nxtWatchContext'

class VideoItem extends Component {
  render() {
    const {itemDetails} = this.props
    const {
      id,
      publishedAt,
      thumbnailUrl,
      title,
      ViewCount,
      Channel,
    } = itemDetails
    const {name, ProfileImageUrl} = Channel

    return (
      <NxtWatchContext.Consumer>
        {value => (
          <VideoListItem>
            <VideoItemInnerContainer to={`/videos/${id}`}>
              <VideoThumbNailImg src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemBodyContainer>
                <ChannelProfileImg src={ProfileImageUrl} alt="channel logo" />
                <VideoItemDescription>
                  <VideoItemTitle DarkTheme={value.isDarkTheme}>
                    {title}
                  </VideoItemTitle>
                  <VideoItemChannelLargeScreen>
                    <VideoItemChannelName DarkTheme={value.isDarkTheme}>
                      {name}
                    </VideoItemChannelName>
                    <VideoItemViewCount DarkTheme={value.isDarkTheme}>
                      {ViewCount} &bull; {publishedAt}
                    </VideoItemViewCount>
                  </VideoItemChannelLargeScreen>
                  <VideoItemChannelMobileView DarkTheme={value.isDarkTheme}>
                    {name} &bull; {ViewCount} &bull; {publishedAt}
                  </VideoItemChannelMobileView>
                </VideoItemDescription>
              </VideoItemBodyContainer>
            </VideoItemInnerContainer>
          </VideoListItem>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoItem
