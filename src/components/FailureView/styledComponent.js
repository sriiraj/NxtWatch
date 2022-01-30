import styled from 'styled-components'

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
    width: 50%;
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
