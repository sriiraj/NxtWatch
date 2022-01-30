import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {
  HomeMainContainer,
  HomeOuterContainer,
  SideBarContainer,
  HomeInnerMainContainer,
  HomeInnerContainer,
  HomeBannerContainer,
  HomeBannerInnerContainer,
  HomeBannerDescription,
  HomeBannerLogoImg,
  HomeBannerLogoTxt,
  HomeBannerButton,
  HomeBannerButtonClose,
  AiOutlineCloseIcon,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  AiOutlineSearchIcon,
  DisplayVideosContainer,
  VideosListContainer,
  LoaderContainer,
  NotFoundContainer,
  Desc,
  Heading,
  Retry,
  MainContainer,
  NoResultImage,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../sidebar'
import VideoItem from '../VideoItem'
import FailureView from '../FailureView'
import NxtWatchContext from '../../context/nxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    bannerDisplay: true,
    closeBanner: false,
    VideosList: [],
    SearchInputValue: '',
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideos()
  }

  OnClickCloseBanner = () => {
    this.setState({closeBanner: true, bannerDisplay: false})
  }

  onChangeSearchInput = event => {
    this.setState({SearchInputValue: event.target.value})
  }

  SearchVideos = () => {
    this.getVideos()
  }

  VideoResponseStructure = Obj => {
    const videoStructure = {
      id: Obj.id,
      publishedAt: Obj.published_at,
      thumbnailUrl: Obj.thumbnail_url,
      title: Obj.title,
      ViewCount: Obj.view_count,
      Channel: {
        name: Obj.channel.name,
        ProfileImageUrl: Obj.channel.profile_image_url,
      },
    }
    return videoStructure
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {SearchInputValue} = this.state
    const JwtToken = Cookies.get('jwt_token')
    const VideoFetchUrl = `https://apis.ccbp.in/videos/all?search=${SearchInputValue}`
    const options = {
      headers: {
        Authorization: `Bearer ${JwtToken}`,
      },
    }
    const response = await fetch(VideoFetchUrl, options)
    if (response.ok) {
      const FetchData = await response.json()
      const VideoList = FetchData.videos.map(i =>
        this.VideoResponseStructure(i),
      )
      this.setState({
        VideosList: VideoList,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => {
    const {bannerDisplay} = this.state
    return (
      <LoaderContainer bannerDisplay={bannerDisplay} data-testid="loader">
        <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
      </LoaderContainer>
    )
  }

  RenderVideos = value => {
    const {VideosList, bannerDisplay} = this.state
    if (VideosList.length > 0) {
      return (
        <VideosListContainer>
          {VideosList.map(i => (
            <VideoItem key={i.id} itemDetails={i} />
          ))}
        </VideosListContainer>
      )
    }
    return (
      <MainContainer bannerPresent={bannerDisplay}>
        <NoResultImage
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <Heading isDark={value.isDarkTheme}>No Search results found</Heading>
        <Desc isDark={value.isDarkTheme}>
          Try different key words or remove search filter
        </Desc>

        <Retry type="button" onClick={this.getVideosList}>
          Retry
        </Retry>
      </MainContainer>
    )
  }

  renderFailureView = value => {
    const {bannerDisplay} = this.state
    return (
      <NotFoundContainer bannerPresent={bannerDisplay}>
        <FailureView value={value} RetryOnclick={this.getVideos} />
      </NotFoundContainer>
    )
  }

  RenderHomePage = value => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.RenderVideos(value)
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView(value)
      default:
        return null
    }
  }

  render() {
    const {closeBanner, SearchInputValue} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => (
          <HomeMainContainer>
            <Header />
            <HomeOuterContainer>
              <SideBarContainer DarkTheme={value.isDarkTheme}>
                <Sidebar />
              </SideBarContainer>
              <HomeInnerMainContainer
                data-testid="home"
                DarkTheme={value.isDarkTheme}
              >
                <HomeBannerContainer
                  data-testid="banner"
                  closeBanner={closeBanner}
                >
                  <HomeBannerInnerContainer>
                    <HomeBannerDescription>
                      <HomeBannerLogoImg
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <HomeBannerLogoTxt>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </HomeBannerLogoTxt>
                      <HomeBannerButton>GET IT NOW</HomeBannerButton>
                    </HomeBannerDescription>
                    <HomeBannerButtonClose
                      onClick={this.OnClickCloseBanner}
                      type="button"
                      data-testid="close"
                    >
                      <AiOutlineCloseIcon />
                    </HomeBannerButtonClose>
                  </HomeBannerInnerContainer>
                </HomeBannerContainer>
                <HomeInnerContainer>
                  <SearchInputContainer>
                    <SearchInput
                      type="search"
                      placeholder="Search"
                      DarkTheme={value.isDarkTheme}
                      onChange={this.onChangeSearchInput}
                      value={SearchInputValue}
                    />
                    <SearchButton
                      type="button"
                      onClick={this.SearchVideos}
                      DarkTheme={value.isDarkTheme}
                      data-testid="searchButton"
                    >
                      <AiOutlineSearchIcon />
                    </SearchButton>
                  </SearchInputContainer>
                  <DisplayVideosContainer>
                    {this.RenderHomePage(value)}
                  </DisplayVideosContainer>
                </HomeInnerContainer>
              </HomeInnerMainContainer>
            </HomeOuterContainer>
          </HomeMainContainer>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
