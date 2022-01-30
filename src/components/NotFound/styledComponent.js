import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  min-height: 100vh;
`
export const NotFoundOuterContainer = styled.div`
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
export const NotFoundInnerMainContainer = styled.div`
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

export const NotFoundInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  @media screen and (min-width: 768px) {
    margin: 30px;
  }
`

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`
export const NotFoundImage = styled.img`
  width: 250px;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
`

export const NotFoundHeading = styled.h1`
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

export const NotFoundDesc = styled.p`
  color: black;
  text-align: center;
  font-size: 15px;
  font-family: 'Roboto';
  color: ${props => (props.DarkTheme ? '#cbd5e1' : '#475569')};
  margin: 0px;
  margin-top: 15px;
  @media screen and (min-width: 767px) {
    font-size: 18px;
    margin-top: 15px;
  }
`
