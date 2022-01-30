import 'reactjs-popup/dist/index.css'
import {withRouter} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {
  MenuIconContainer,
  MenuContainer,
  MenuCloseContainer,
  CloseBtn,
  MenuPopupDialog,
  MenuPopupSidebarContainer,
} from './styledComponents'
import Sidebar from '../sidebar'
import './index.css'

const MenuPopup = props => {
  const {value} = props
  return (
    <MenuPopupDialog
      className="popup-content"
      modal
      trigger={
        <MenuIconContainer>
          <GiHamburgerMenu
            className="GiHamburgerMenu icons"
            size="25"
            fill={value.isDarkTheme ? 'white' : 'black'}
          />
        </MenuIconContainer>
      }
    >
      {close => (
        <MenuContainer DarkTheme={value.isDarkTheme}>
          <MenuCloseContainer>
            <CloseBtn
              fill={value.isDarkTheme ? 'white' : 'black'}
              onClick={close}
            />
          </MenuCloseContainer>
          <MenuPopupSidebarContainer>
            <Sidebar />
          </MenuPopupSidebarContainer>
        </MenuContainer>
      )}
    </MenuPopupDialog>
  )
}
export default withRouter(MenuPopup)
