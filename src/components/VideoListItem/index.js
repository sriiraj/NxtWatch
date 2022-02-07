import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  VideoListItemMainContainer,
  VideoListItemContainer,
  VideoListItemImg,
  VideoListItemDescContainer,
  VideoListItemTitle,
  VideoChannelContainer,
  VideoChannelProfileImgContainer,
  VideoChannelProfileImg,
  VideoListItemSubDescContainer,
  VideoListItemChannelName,
  VideoListItemViewsContainer,
  VideoListItemViews,
  VideoListItemPublishedAt,
} from './styledComponents'

class VideoItemList extends Component {
  render() {
    const {ItemDetails} = this.props
    return (
      <NxtWatchContext.Consumer>
        {value => (
          <VideoListItemMainContainer>
            <VideoListItemContainer to={`/videos/${ItemDetails.id}`}>
              <VideoListItemImg
                src={ItemDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <VideoChannelContainer>
                <VideoChannelProfileImgContainer>
                  <VideoChannelProfileImg src={ItemDetails.profileImageUrl} />
                </VideoChannelProfileImgContainer>
                <VideoListItemDescContainer>
                  <VideoListItemTitle DarkTheme={value.isDarkTheme}>
                    {ItemDetails.title}
                  </VideoListItemTitle>
                  <VideoListItemSubDescContainer DarkTheme={value.isDarkTheme}>
                    <VideoListItemChannelName>
                      {ItemDetails.name}
                    </VideoListItemChannelName>
                    <VideoListItemViewsContainer>
                      <VideoListItemViews>
                        {ItemDetails.viewCount} Views
                      </VideoListItemViews>
                      <VideoListItemPublishedAt>
                        {ItemDetails.published_at}
                      </VideoListItemPublishedAt>
                    </VideoListItemViewsContainer>
                  </VideoListItemSubDescContainer>
                </VideoListItemDescContainer>
              </VideoChannelContainer>
            </VideoListItemContainer>
          </VideoListItemMainContainer>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}
export default withRouter(VideoItemList)
