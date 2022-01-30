import './App.css'
import {Route, Switch, Redirect, withRouter} from 'react-router-dom'
import {Component} from 'react'
import NxtWatchContext from './context/nxtWatchContext'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoItemDetail from './components/VideoItemDetail'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

class App extends Component {
  state = {
    isDarkTheme: false,
    selectedRoute: 'home',
    likedVideos: [],
    dislikedVideos: [],
    savedVideos: [],
  }

  componentDidMount() {
    const {history} = this.props
    let path = ''
    path = history.location.pathname
    const updatedPath = path === '/' ? 'home' : path.slice(1)
    if (
      updatedPath.length !== 0 &&
      ['home', 'trending', 'gaming', 'saved-videos'].includes(updatedPath)
    ) {
      this.setState({selectedRoute: updatedPath})
    } else {
      this.setState({selectedRoute: 'none'})
    }
  }

  toggleDark = () => {
    this.setState(i => ({isDarkTheme: !i.isDarkTheme}))
  }

  changeSelectedRoute = route => {
    this.setState({selectedRoute: route})
  }

  updateSavedVideos = video => {
    this.setState(prevState => {
      const savedFilter = prevState.savedVideos.filter(i => i.id === video.id)
      if (savedFilter.length > 0) {
        return {
          savedVideos: prevState.savedVideos.filter(i => i.id !== video.id),
        }
      }
      return {savedVideos: [...prevState.savedVideos, video]}
    })
  }

  updateLikedVideos = id => {
    this.setState(prevState => {
      if (prevState.dislikedVideos.includes(id)) {
        const prevDisliked = prevState.dislikedVideos
        prevDisliked.splice(prevState.dislikedVideos.indexOf(id), 1)
        return {
          dislikedVideos: prevDisliked,
        }
      }
      return {...prevState}
    })

    this.setState(prevState => {
      if (prevState.likedVideos.includes(id)) {
        const prevLiked = prevState.likedVideos
        prevLiked.splice(prevLiked.indexOf(id), 1)
        return {
          likedVideos: prevLiked,
        }
      }
      return {likedVideos: [...prevState.likedVideos, id]}
    })
  }

  updateDislikedVideos = id => {
    this.setState(prevState => {
      if (prevState.likedVideos.includes(id)) {
        const prevLiked = prevState.likedVideos
        prevLiked.splice(prevLiked.indexOf(id), 1)
        return {
          likedVideos: prevLiked,
        }
      }
      return {...prevState}
    })

    this.setState(prevState => {
      if (prevState.dislikedVideos.includes(id)) {
        const prevDisliked = prevState.dislikedVideos
        prevDisliked.splice(prevState.dislikedVideos.indexOf(id), 1)
        return {
          dislikedVideos: prevDisliked,
        }
      }
      return {dislikedVideos: [...prevState.dislikedVideos, id]}
    })
  }

  render() {
    const {
      isDarkTheme,
      selectedRoute,
      likedVideos,
      dislikedVideos,
      savedVideos,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkTheme,
          toggleDark: this.toggleDark,
          selectedRoute,
          changeSelectedRoute: this.changeSelectedRoute,
          likedVideos,
          dislikedVideos,
          savedVideos,
          updateLikedVideos: this.updateLikedVideos,
          updateDislikedVideos: this.updateDislikedVideos,
          updateSavedVideos: this.updateSavedVideos,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetail}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}
export default withRouter(App)
