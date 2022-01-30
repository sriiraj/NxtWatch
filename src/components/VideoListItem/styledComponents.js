import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItemMainContainer = styled.li`
  margin: 8px;
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`
export const VideoListItemContainer = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`
export const VideoListItemImg = styled.img`
  width: 100%;
  @media screen and (min-width: 768px) {
    max-width: 50%;
    min-width: 375px;
  }
  @media screen and (min-width: 1100px) {
    max-width: 40%;
    min-width: 400px;
  }
`
export const VideoChannelContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 16px;
  @media screen and (min-width: 768px) {
    align-items: flex-start;
    margin-top: 10px;
    margin-left: 2%;
  }
`
export const VideoChannelProfileImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const VideoChannelProfileImg = styled.img`
  width: 40px;
  @media screen and (min-width: 768px) {
    width: 45px;
  }
`
export const VideoListItemDescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const VideoListItemTitle = styled.p`
  margin: 0px;
  margin-bottom: 12px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: ${props => (props.DarkTheme ? '#f1f1f1' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`

export const VideoListItemSubDescContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: ${props => (props.DarkTheme ? '#616e7c' : '#606060')};
  @media screen and (min-width: 768px) {
    flex-direction: column;
  }
`
export const VideoListItemChannelName = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  margin: 0px;
  margin-right: 18px;
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`
export const VideoListItemViewsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
  @media screen and (min-width: 768px) {
    margin-bottom: 10px;
  }
`
export const VideoListItemViews = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  margin: 0px;
  margin-right: 18px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const VideoListItemPublishedAt = styled.p`
  margin: 0px;
  font-family: 'Roboto';
  font-size: 13px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
