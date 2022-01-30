import styled from 'styled-components'
import Popup from 'reactjs-popup'
import {MdClose} from 'react-icons/md'

export const MenuIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const MenuPopupDialog = styled(Popup)`
  &-overlay {
    @media screen and (min-width: 768px) {
      display: none !important;
      inset: none;
    }
  }
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100vh;
    min-width: 100vw;
    border: none;
    outline: none;
    border-radius: 0px;
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
`
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 60vh;
`

export const MenuCloseContainer = styled.div`
  display: flex;
  align-self: flex-end;
  padding: 20px;
`

export const CloseBtn = styled(MdClose)`
  font-size: 20px;
  font-weight: 600;
`
export const MenuPopupSidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: auto;
  margin-bottom: auto;
`
