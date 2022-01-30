import {Component} from 'react'
import NxtWatchContext from '../../context/nxtWatchContext'
import {
  GamingListItem,
  GamingItemInnerContainer,
  GamingItemThumbnailImg,
  GamingItemBodyContainer,
  GamingItemTitle,
  GamingItemViews,
} from './styledComponents'

class GamingVideoItem extends Component {
  render() {
    const {ItemDetails} = this.props
    return (
      <NxtWatchContext.Consumer>
        {value => (
          <GamingListItem>
            <GamingItemInnerContainer to={`/video/${ItemDetails.id}`}>
              <GamingItemThumbnailImg
                src={ItemDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <GamingItemBodyContainer>
                <GamingItemTitle DarkTheme={value.isDarkTheme}>
                  {ItemDetails.title}
                </GamingItemTitle>
                <GamingItemViews DarkTheme={value.isDarkTheme}>
                  {ItemDetails.viewCount} Watching WorldWide
                </GamingItemViews>
              </GamingItemBodyContainer>
            </GamingItemInnerContainer>
          </GamingListItem>
        )}
      </NxtWatchContext.Consumer>
    )
  }
}
export default GamingVideoItem
