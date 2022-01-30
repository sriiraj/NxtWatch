import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../context/nxtWatchContext'
import Header from '../Header'
import Sidebar from '../sidebar'
import FailureView from '../FailureView'
import GamingVideoItem from '../GamingVideoItem'
import {
  GamingMainContainer,
  GamingOuterContainer,
  SideBarContainer,
  GamingInnerMainContainer,
  GamingInnerContainer,
  GamingHeaderContainer,
  IconContainer,
  GamingIcon,
  GamingHeading,
  LoaderContainer,
  GamingVideoListContainer,
  GamingList,
  NotFoundContainer,
} from './styledComponent'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    GamingVideoList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGamingVideosList()
  }

  getGamingVideosList = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/gaming`
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
      }))
      this.setState({
        GamingVideoList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  RenderGamingVideos = () => {
    const {GamingVideoList} = this.state
    return (
      <GamingVideoListContainer>
        <GamingList>
          {GamingVideoList.map(i => (
            <GamingVideoItem key={i.id} ItemDetails={i} />
          ))}
        </GamingList>
      </GamingVideoListContainer>
    )
  }

  RenderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </LoaderContainer>
  )

  RenderFailureView = value => (
    <NotFoundContainer>
      <FailureView value={value} RetryOnclick={this.getGamingVideosList} />
    </NotFoundContainer>
  )

  ShowGamingPage = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.RenderGamingVideos(value)
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
          <GamingMainContainer>
            <Header />
            <GamingOuterContainer>
              <SideBarContainer DarkTheme={value.isDarkTheme}>
                <Sidebar />
              </SideBarContainer>
              <GamingInnerMainContainer
                data-testid="gaming"
                DarkTheme={value.isDarkTheme}
              >
                <GamingInnerContainer>
                  <GamingHeaderContainer DarkTheme={value.isDarkTheme}>
                    <IconContainer DarkTheme={value.isDarkTheme}>
                      <GamingIcon />
                    </IconContainer>
                    <GamingHeading DarkTheme={value.isDarkTheme}>
                      Gaming
                    </GamingHeading>
                  </GamingHeaderContainer>
                  {this.ShowGamingPage(value)}
                </GamingInnerContainer>
              </GamingInnerMainContainer>
            </GamingOuterContainer>
          </GamingMainContainer>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Gaming
