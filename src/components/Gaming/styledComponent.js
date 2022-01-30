import styled from 'styled-components'
import {SiYoutubegaming} from 'react-icons/si'

export const GamingMainContainer = styled.div`
  min-height: 100vh;
`
export const GamingOuterContainer = styled.div`
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
export const GamingInnerMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-width: 100%;
  height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
  background-color: ${props => (props.DarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (min-width: 768px) {
    min-width: 83%;
  }
`
export const GamingInnerContainer = styled.div`
  min-height: 80vh;
`
export const GamingHeaderContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: ${props => (props.DarkTheme ? '#181818' : '#ebebeb')};
  display: flex;
  padding: 50px 20px;
  align-items: center;
  padding-left: 4%;
  @media screen and (min-width: 768px) {
    padding: 75px 20px;
    padding-left: 6%;
    height: 140px;
  }
`
export const IconContainer = styled.div`
  background-color: ${props => (props.DarkTheme ? '#0f0f0f' : '#d7dfe9')};
  padding: 37px;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 25px;
  @media screen and (max-width: 767px) {
    padding: 15px;
    width: 50px;
    height: 50px;
    margin-right: 15px;
  }
`

export const GamingIcon = styled(SiYoutubegaming)`
  font-size: 40px;
  color: red;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`
export const GamingHeading = styled.h1`
  font-weight: 700;
  font-size: 40px;
  color: ${props => (props.DarkTheme ? '#f1f1f1' : '#1e293b')};
  @media screen and (max-width: 767px) {
    font-size: 24px;
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

export const GamingVideoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-width: 100%;
`
export const GamingList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  margin: 30px 20px;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    margin: 40px;
    justify-content: space-evenly;
  }
`
export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 4%;
`
