import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  toggleDark: () => {},
  selectedRoute: '',
  changeSelectedRoute: () => {},
  likedVideos: [],
  dislikedVideos: [],
  savedVideos: [],
  updateLikedVideos: id => {},
  updateDislikedVideos: id => {},
  updateSavedVideos: id => {},
})

export default NxtWatchContext
