import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const SidebarMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  min-height: 94%;
  @media screen and (max-width: 767px) {
    width: 100vw;
    height: 100%;
  }
`
export const SidebarList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding-left: 0px;
  margin-top: 0px;
`
export const SidebarListItem = styled.li`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color: ${props => {
    if (props.highlight && props.DarkTheme) {
      return '#383838'
    }
    if (props.highlight && !props.DarkTheme) {
      return '#f1f5f9'
    }
    return 'transparent'
  }};

  @media screen and (max-width: 1200px) {
    padding: 10px;
  } ;
`
export const SidebarListItemContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-width: 92%;
  text-decoration: none;
  cursor: pointer;
  border: none;
  outline: none;
  @media screen and (max-width: 767px) {
    min-width: 40%;
  }
`
export const SidbarLabel = styled.div`
  font-family: 'Roboto';
  font-weight: ${props => (props.highlight ? '900' : '500')};
  font-size: 17px;
  margin-left: 10%;
  color: ${props => (props.DarkTheme ? '#f1f1f1' : '#424242')};
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`
export const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-self: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const SocialHeading = styled.p`
  color: ${props => (props.DarkTheme ? '#f1f1f1' : '#313131')};
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 20px;
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
`
export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  min-width: 50%;
}
`
export const SocialMediaImg = styled.img`
  width: 30px;
  margin-right: 20px;
  @media screen and (max-width: 1200px) {
    width: 27px;
    margin-right: 16px;
  }
`
export const SocialMediaDescription = styled.p`
  color: ${props => (props.DarkTheme ? '#cccccc' : '#1e293b')};
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 17px;
  line-height: 1.4;
  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }
`
