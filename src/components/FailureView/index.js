import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {
  NotFoundInnerContainer,
  Image,
  Desc,
  Heading,
  Retry,
  RetryContainer,
} from './styledComponent'

class FailureView extends Component {
  render() {
    const {value, RetryOnclick} = this.props
    return (
      <NotFoundInnerContainer>
        <Image
          src={
            value.isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          }
          alt="failure view"
        />
        <Heading DarkTheme={value.isDarkTheme}>
          Oops! Something Went Wrong
        </Heading>
        <Desc DarkTheme={value.isDarkTheme}>
          We are having some trouble to complete your request. Please try again.
        </Desc>
        <RetryContainer>
          <Retry type="button" onClick={RetryOnclick}>
            Retry
          </Retry>
        </RetryContainer>
      </NotFoundInnerContainer>
    )
  }
}
export default withRouter(FailureView)
