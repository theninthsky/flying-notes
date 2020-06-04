import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

import NavigationBar from './components/Navigation/NavigationBar'
import Auth from './components/Auth/Auth'
import User from './components/Auth/User'
import Notes from './components/Notes/Notes'
import Spinner from './components/UI/Spinner'
import * as actions from './store/actions/index'
import './App.scss'

import images from './util/images'

const mapStateToProps = state => ({
  app: state.app,
  user: state.user,
})

const mapDispatchToProps = dispatch => ({
  onChangeTheme: () => dispatch(actions.requestChangeTheme()),
})

const App = props => {
  const {
    app: { theme, loading, notesFetched },
    user,
    onChangeTheme,
  } = props

  const history = useHistory()

  useEffect(() => {
    theme === 'dark' ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  }, [theme])

  useEffect(() => {
    history.push('/')
  }, [history, notesFetched])

  /* Preload Images */
  useEffect(() => {
    images.forEach(image => {
      const img = new Image()
      img.src = image
    })
  }, [])

  return (
    <>
      <NavigationBar theme={theme} user={user} changeTheme={onChangeTheme} />

      {loading ? (
        <Spinner />
      ) : (
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route path="/auth" component={Auth} />
          <Route path="/account" component={User} />
        </Switch>
      )}
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
