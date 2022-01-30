import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2%;
  margin-left: 15px;
  margin-right: 15px;
  width: 320px;
  @media screen and (min-width: 576px) {
    width: 270px;
  }
  @media screen and (min-width: 767px) {
    width: 265px;
  }
  @media screen and (min-width: 1000px) {
    width: 270px;
  }
  @media screen and (min-width: 1200px) {
    width: 304px;
  }
  @media screen and (min-width: 1400px) {
    width: 360px;
  }
`
export const VideoItemInnerContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`
export const VideoThumbNailImg = styled.img`
  width: 320px;
  @media screen and (min-width: 576px) {
    width: 270px;
  }
  @media screen and (min-width: 767px) {
    width: 265px;
  }
  @media screen and (min-width: 1000px) {
    width: 270px;
  }
  @media screen and (min-width: 1200px) {
    width: 310px;
  }
  @media screen and (min-width: 1400px) {
    width: 360px;
  }
`
export const VideoItemBodyContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  min-width: 90%;
  margin-top: 10px;
`
export const ChannelProfileImg = styled.img`
  margin-right: 8px;
  width: 50px;
`
export const VideoItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const VideoItemTitle = styled.p`
  color: ${props => (props.DarkTheme ? '#cccccc' : '#1e293b')};
  font-size: 15px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
  word-spacing: 1.3px;
`
export const VideoItemChannelLargeScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 576px) {
    display: none;
  }
`
export const VideoItemChannelName = styled.p`
  color: ${props => (props.DarkTheme ? '#909090' : '#475569')};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 9px;
`
export const VideoItemViewCount = styled.p`
  color: ${props => (props.DarkTheme ? '#909090' : '#475569')};
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 7px;
`
export const VideoItemChannelMobileView = styled.p`
  color: ${props => (props.DarkTheme ? '#909090' : '#475569')};
  font-size: 12px;
  font-weight: 700;
  font-family: 'Roboto';
  margin: 0px;
  margin-top: 9px;
  margin-bottom: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  } ;
`
