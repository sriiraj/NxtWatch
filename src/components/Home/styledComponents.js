import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  min-height: 100vh;
`
export const HomeOuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 100%;
  min-height: 90vh;
`

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 17%;
  margin: 0px;
  min-height: 90vh;
  background-color: ${props => (props.DarkTheme ? '#212121' : 'white')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const HomeInnerMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 100%;
  height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  background-color: ${props => (props.DarkTheme ? '#181818' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    min-width: 83%;
  }
`
export const HomeInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  @media screen and (min-width: 768px) {
    margin: 30px;
  }
`

export const HomeBannerContainer = styled.div`
  display: ${props => (props.closeBanner ? 'none' : 'flex')};
  flex-direction: row;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  max-width: 100%;
  margin: 0px;
  margin-bottom: 0px;
  height: 220px;
  @media screen and (min-width: 768px) {
    margin: 30px;
    margin-bottom: 0px;
    min-height: 270px;
  }
`
export const HomeBannerInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  min-width: 100%;
  align-items: flex-start;
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`
export const HomeBannerDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 70%;
  min-height: 180px;
  @media screen and (min-width: 768px) {
    width: 35%;
    min-height: 220px;
  }
`

export const HomeBannerLogoImg = styled.img`
  max-width: 130px;
  @media screen and (min-width: 768px) {
    max-width: 180px;
  }
`
export const HomeBannerLogoTxt = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  margin-top: 2px;
  @media screen and (min-width: 768px) {
    font-size: 22px;
  }
`
export const HomeBannerButton = styled.button`
  border: 2px solid #475569;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  padding: 10px;
  color: #475569;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 12px;
  }
`
export const HomeBannerButtonClose = styled.button`
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const AiOutlineCloseIcon = styled(AiOutlineClose)`
  font-size: 20px;
  color: #475569;
`
export const SearchInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    margin: 0px;
  }
`
export const SearchInput = styled.input`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.DarkTheme ? '#424242' : '#cccccc')};
  width: 350px;
  padding: 10px 20px;
  min-height: 100%;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: transparent;
  outline: none;
  font-weight: 500;
  font-family: 'Roboto';
  color: ${props => (props.DarkTheme ? '#cccccc' : '#383838')};
  @media screen and (min-width: 767px) {
    width: 370px;
  }
`
export const SearchButton = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.DarkTheme ? '#424242' : '#cccccc')};
  outline: none;
  padding: 8px 18px;
  background-color: ${props => (props.DarkTheme ? '#313131' : '#f4f4f4')};
  display: flex;
  align-self: center;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  font-family: 'Roboto';
  font-size: 16px;
  @media screen and (min-width: 768px) {
    padding: 8px 25px;
  }
`
export const AiOutlineSearchIcon = styled(AiOutlineSearch)`
  font-size: 20px;
  color: #606060;
`
export const DisplayVideosContainer = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`
export const VideosListContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 767px) {
    justify-content: center;
  }
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => (props.bannerDisplay ? '50vh' : '80vh')};
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${props => (props.bannerDisplay ? '50vh' : '80vh')};
  align-items: center;
  background-color: transparent;
  margin-top: 4%;
  @media screen and (min-width: 767px) {
    height: 90vh;
    margin-top: 0px;
  }
`
export const NotFoundInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 75%;
  align-items: center;
  @media screen and (min-width: 767px) {
    width: 45%;
  }
`
export const Image = styled.img`
  width: 75%;
  @media screen and (min-width: 768px) {
    width: 55%;
  }
`

export const Heading = styled.h1`
  color: black;
  text-align: center;
  font-size: 20px;
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#1e293b')};
  margin: 0px;
  margin-top: 10px;
  @media screen and (min-width: 767px) {
    font-size: 28px;
    margin-top: 15px;
  }
`

export const Desc = styled.p`
  color: black;
  text-align: center;
  font-size: 15px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => (props.DarkTheme ? '#cbd5e1' : '#475569')};
  margin: 0px;
  margin-top: 15px;
  @media screen and (min-width: 767px) {
    font-size: 18px;
    margin-top: 15px;
  }
`
export const RetryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #1e293b;
  text-decoration: none;
  margin-bottom: 32px;
`
export const Retry = styled.button`
  padding: 8px 20px;
  color: white;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 12px;
  cursor: pointer;
  background-color: #4f46e5;
  border: 0px;
  border-radius: 5px;
  @media screen and (min-width: 767px) {
    font-size: 16px;
    margin-top: 15px;
    padding: 10px 24px;
  }
`
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  width: 100%;
  min-height: ${props => (props.bannerPresent ? '50vh' : '80vh')};
  justify-content: center;
  align-items: center;
  margin-top: 4%;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`
export const NoResultImage = styled.img`
  width: 50%;
  @media screen and (min-width: 768px) {
    width: 35%;
  }
`
