import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/nxtWatchContext'
import Header from '../Header'
import Sidebar from '../sidebar'
import VideoItemList from '../VideoListItem'
import FailureView from '../FailureView'
import {
  TrendingMainContainer,
  TrendingOuterContainer,
  SideBarContainer,
  TrendingInnerMainContainer,
  TrendingInnerContainer,
  TrendingHeaderContainer,
  IconContainer,
  TrendingIcon,
  TrendingHeading,
  LoaderContainer,
  TrendingVideoListContainer,
  TrendingList,
  NotFoundContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    TrendingVideoList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingVideosList()
  }

  getTrendingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const FetchedData = await response.json()
      const updatedData = FetchedData.videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
        name: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
      }))
      this.setState({
        TrendingVideoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  RenderTrendingVideos = () => {
    const {TrendingVideoList} = this.state
    return (
      <TrendingVideoListContainer>
        <TrendingList>
          {TrendingVideoList.map(i => (
            <VideoItemList key={i.id} ItemDetails={i} />
          ))}
        </TrendingList>
      </TrendingVideoListContainer>
    )
  }

  RenderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  RenderFailureView = value => (
    <NotFoundContainer>
      <FailureView value={value} RetryOnclick={this.getTrendingVideosList} />
    </NotFoundContainer>
  )

  ShowTrendingPage = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.RenderTrendingVideos(value)
      case apiStatusConstants.failure:
        return this.RenderFailureView(value)
      case apiStatusConstants.inProgress:
        return this.RenderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => (
          <TrendingMainContainer>
            <Header />
            <TrendingOuterContainer>
              <SideBarContainer DarkTheme={value.isDarkTheme}>
                <Sidebar />
              </SideBarContainer>
              <TrendingInnerMainContainer
                data-testid="trending"
                DarkTheme={value.isDarkTheme}
              >
                <TrendingInnerContainer>
                  <TrendingHeaderContainer DarkTheme={value.isDarkTheme}>
                    <IconContainer DarkTheme={value.isDarkTheme}>
                      <TrendingIcon />
                    </IconContainer>
                    <TrendingHeading DarkTheme={value.isDarkTheme}>
                      Trending
                    </TrendingHeading>
                  </TrendingHeaderContainer>
                  {this.ShowTrendingPage(value)}
                </TrendingInnerContainer>
              </TrendingInnerMainContainer>
            </TrendingOuterContainer>
          </TrendingMainContainer>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Trending
