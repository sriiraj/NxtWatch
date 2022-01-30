import styled from 'styled-components'
import ReactPlayer from 'react-player'
import {MdPlaylistAdd} from 'react-icons/md'
import {BiLike, BiDislike} from 'react-icons/bi'

export const VideoItemDetailContainer = styled.div`
  min-height: 100vh;
`
export const VideoItemDetailOuterContainer = styled.div`
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
export const VideoItemDetailInnerContainer = styled.div`
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
export const DisplayVideo = styled.div`
  min-height: 120vh;
`
export const VideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  @media screen and (min-width: 768px) {
    margin: 30px;
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

export const Player = styled(ReactPlayer)`
  width: 85% !important ;
  height: 500px !important;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 95% !important ;
    height: 300px !important;
  }

  @media screen and (max-width: 450px) {
    width: 95% !important ;
    height: 200px !important;
  }
`
export const VideoDescription = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 767px) {
    width: 95% !important ;
  }

  @media screen and (max-width: 450px) {
    width: 95% !important ;
  }
`
export const VideoTitle = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin-top: 18px;
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 22px;
    margin-top: 22px;
  }
`
export const VideoActionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 100%;
`
export const VideoActionInnerContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
  color: ${props => (props.DarkTheme ? '#616e7c' : '#475569')};
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ViewsAndAt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const Views = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  margin-right: 15px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 767px) {
    margin-bottom: 0px;
  }
`
export const PublishedAt = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 13px;
  @media screen and (max-width: 767px) {
    margin-bottom: 0px;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const LikeAndSaveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`
export const LikeCont = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => (props.liked ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
  @media screen and (max-width: 767px) {
    margin-right: 18px;
    font-size: 14px;
  }
`
export const DislikeCont = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => (props.disliked ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
  @media screen and (max-width: 767px) {
    margin-right: 18px;
    font-size: 14px;
  }
`

export const SaveCont = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
  @media screen and (max-width: 767px) {
    margin-right: 18px;
    font-size: 14px;
  }
`
export const LikeIcon = styled(BiLike)`
  margin-right: 5px;
  font-size: 20px;
  @media screen and (max-width: 767px) {
    font-size: 17px;
    margin-right: 2px;
  }
`
export const DislikeIcon = styled(BiDislike)`
  margin-right: 5px;
  font-size: 20px;
  @media screen and (max-width: 767px) {
    font-size: 17px;
    margin-right: 2px;
  }
`
export const SaveIcon = styled(MdPlaylistAdd)`
  margin-right: 5px;
  font-size: 20px;
  @media screen and (max-width: 767px) {
    font-size: 17px;
    margin-right: 2px;
  }
`
export const ActionText = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
  @media screen and (max-width: 767px) {
    font-size: 14px;
  }
`

export const HorLine = styled.hr`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.DarkTheme ? '#475569' : '#909090')};
  min-width: 85%;
  margin-bottom: 20px;
  @media screen and (max-width: 767px) {
    margin-bottom: 10px;
    width: 95% !important ;
    margin-top: 0px;
  }
  @media screen and (max-width: 450px) {
    width: 95% !important ;
  }
`
export const VideoChannelContainer = styled.div`
  display: flex;
  width: 85%;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  @media screen and (max-width: 767px) {
    width: 95% !important ;
  }

  @media screen and (max-width: 450px) {
    width: 95% !important ;
  }
`
export const VideoChannelImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const VideoChannelImg = styled.img`
  width: 45px;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    width: 50px;
    margin-right: 20px;
  }
`
export const VideoChannelDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
  margin-bottom: 8px;
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const Subscribers = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 12px;
  margin: 0px;
  color: ${props => (props.DarkTheme ? '#616e7c' : '#475569')};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
export const DescriptionLargeScreen = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  margin: 0px;
  margin-top: 25px;
  line-spacing: 1.3px;
  word-spacing: 1.2;
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#424242')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const DescriptionMobileScreen = styled.p`
  min-width: 85%;
  margin-bottom: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
  margin-top: 25px;
  line-spacing: 1.3px;
  word-spacing: 1.2;
  color: ${props => (props.DarkTheme ? '#f9f9f9' : '#424242')};
  @media screen and (max-width: 767px) {
    width: 95% !important ;
  }
  @media screen and (max-width: 450px) {
    width: 95% !important ;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoPlayerFailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  margin-top: 30px;
`
