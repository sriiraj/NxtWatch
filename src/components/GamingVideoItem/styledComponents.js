import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingListItem = styled.li`
  margin: 0px;
  margin-bottom: 20px;
  border-radius: 12px;
  @media screen and (min-width: 768px) {
    margin: 20px;
  }
`
export const GamingItemInnerContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  width: 175px;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const GamingItemThumbnailImg = styled.img`
  width: 100%;
`
export const GamingItemBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Roboto';
`
export const GamingItemTitle = styled.p`
  font-size: 16px;
  margin-bottom: 0px;
  color: ${props => (props.DarkTheme ? '#f1f1f1' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const GamingItemViews = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.DarkTheme ? '#616e7c' : '#606060')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
