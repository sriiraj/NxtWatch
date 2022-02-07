import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../sidebar'
import NxtWatchContext from '../../context/nxtWatchContext'
import FailureView from '../FailureView'
import {
  VideoItemDetailContainer,
  VideoItemDetailOuterContainer,
  SideBarContainer,
  VideoItemDetailInnerContainer,
  DisplayVideo,
  VideoContainer,
  Player,
  VideoDescription,
  VideoTitle,
  VideoActionContainer,
  VideoActionInnerContainer,
  ViewsAndAt,
  Views,
  PublishedAt,
  LikeAndSaveContainer,
  LikeCont,
  LikeIcon,
  ActionText,
  DislikeCont,
  DislikeIcon,
  SaveCont,
  SaveIcon,
  HorLine,
  LoaderContainer,
  VideoChannelContainer,
  VideoChannelImgContainer,
  VideoChannelImg,
  VideoChannelDesc,
  Subscribers,
  ChannelName,
  DescriptionLargeScreen,
  DescriptionMobileScreen,
  VideoPlayerFailureContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemDetail extends Component {
  state = {
    VideoData: {},
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.GetVideo()
  }

  formatVideoData = data => ({
    id: data.video_details.id,
    title: data.video_details.title,
    videoUrl: data.video_details.video_url,
    thumbnailUrl: data.video_details.thumbnail_url,
    viewCount: data.video_details.view_count,
    published_at: data.video_details.published_at,
    description: data.video_details.description,
    name: data.video_details.channel.name,
    profileImageUrl: data.video_details.channel.profile_image_url,
    subscriberCount: data.video_details.channel.subscriber_count,
  })

  GetVideo = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const JwtToken = Cookies.get('jwt_token')
    const FetchUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }
    const response = await fetch(FetchUrl, options)
    if (response.ok) {
      const FetchData = await response.json()
      const UpdateVideoData = this.formatVideoData(FetchData)
      this.setState({
        VideoData: UpdateVideoData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  RenderVideoPlayer = value => {
    const {VideoData} = this.state
    const onLike = () => {
      value.updateLikedVideos(VideoData.id)
    }
    const onDisLiked = () => {
      value.updateDislikedVideos(VideoData.id)
    }
    const onSaved = () => {
      value.updateSavedVideos(VideoData)
    }

    const isSaved = () => {
      const saved = value.savedVideos.filter(i => i.id === VideoData.id)
      return saved.length > 0
    }
    return (
      <VideoContainer>
        <Player controls url={VideoData.videoUrl} />
        <VideoDescription>
          <VideoTitle DarkTheme={value.isDarkTheme}>
            {VideoData.title}
          </VideoTitle>
          <VideoActionContainer>
            <VideoActionInnerContainer DarkTheme={value.isDarkTheme}>
              <ViewsAndAt>
                <Views>{VideoData.viewCount} views</Views>
                <PublishedAt>{VideoData.published_at}</PublishedAt>
              </ViewsAndAt>
              <LikeAndSaveContainer>
                <LikeCont
                  type="button"
                  onClick={onLike}
                  liked={value.likedVideos.includes(VideoData.id)}
                >
                  <LikeIcon />
                  Like
                </LikeCont>
                <DislikeCont
                  type="button"
                  onClick={onDisLiked}
                  disliked={value.dislikedVideos.includes(VideoData.id)}
                >
                  <DislikeIcon />
                  Dislike
                </DislikeCont>
                <SaveCont
                  type="button"
                  onClick={onSaved}
                  saved={isSaved(VideoData)}
                >
                  <SaveIcon />
                  {isSaved(VideoData) ? 'Saved' : 'Save'}
                </SaveCont>
              </LikeAndSaveContainer>
            </VideoActionInnerContainer>
          </VideoActionContainer>
        </VideoDescription>
        <HorLine DarkTheme={value.isDarkTheme} />
        <VideoChannelContainer>
          <VideoChannelImgContainer>
            <VideoChannelImg
              src={VideoData.profileImageUrl}
              alt="channel logo"
            />
            <VideoChannelDesc>
              <ChannelName DarkTheme={value.isDarkTheme}>
                {VideoData.name}
              </ChannelName>
              <Subscribers DarkTheme={value.isDarkTheme}>
                {VideoData.subscriberCount} subscribers
              </Subscribers>
              <DescriptionLargeScreen DarkTheme={value.isDarkTheme}>
                {VideoData.description}
              </DescriptionLargeScreen>
            </VideoChannelDesc>
          </VideoChannelImgContainer>
          <DescriptionMobileScreen DarkTheme={value.isDarkTheme}>
            {VideoData.description}
          </DescriptionMobileScreen>
        </VideoChannelContainer>
      </VideoContainer>
    )
  }

  RenderFailureView = value => (
    <VideoPlayerFailureContainer>
      <FailureView value={value} RetryOnclick={this.GetVideo} />
    </VideoPlayerFailureContainer>
  )

  RenderVideoPage = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.RenderVideoPlayer(value)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.RenderFailureView(value)
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => (
          <VideoItemDetailContainer>
            <Header />
            <VideoItemDetailOuterContainer>
              <SideBarContainer DarkTheme={value.isDarkTheme}>
                <Sidebar />
              </SideBarContainer>
              <VideoItemDetailInnerContainer
                data-testid="videoItemDetails"
                DarkTheme={value.isDarkTheme}
              >
                <DisplayVideo>{this.RenderVideoPage(value)}</DisplayVideo>
              </VideoItemDetailInnerContainer>
            </VideoItemDetailOuterContainer>
          </VideoItemDetailContainer>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}

export default VideoItemDetail
