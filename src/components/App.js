import Container from 'react-bootstrap/Container'
import { connect } from 'react-redux'
import { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch, useLocation } from 'react-router-dom'

import { loadInitialData } from 'store/actions/shared'
import { loginUser } from 'store/actions/auth'
import AppNav from './AppNav'
import HomePage from './HomePage'
import LeaderBoard from './LeaderBoard'
import LoadingSpinner from './LoadingSpinner'
import LoginRequired from './LoginRequired'
import NotFound from './NotFound'
import QuestionNew from './QuestionNew'
import QuestionPage from './QuestionPage'
import './App.scss'


function App({ onMount }) {
  useEffect(onMount, []) // eslint-disable-line react-hooks/exhaustive-deps
  const { pathname } = useLocation();
  return (
    <Fragment>
      <AppNav />
      <Container>
        <LoadingSpinner>
          <LoginRequired>
            <Switch>
              <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
              <Route exact path="/" component={HomePage} />
              <Route exact path='/question/:id' component={QuestionPage} />
              <Route exact path="/new" component={QuestionNew} />
              <Route exact path="/board" component={LeaderBoard} />
              <Route component={NotFound} />
            </Switch>
          </LoginRequired>
        </LoadingSpinner>
      </Container>
    </Fragment>
  )
}

const mapDispatchToProps = (dispatch) => ({
  onMount: () => {
    dispatch(loadInitialData())
      .then(() => dispatch(loginUser('johndoe')))
  }
})

const ConnectedApp = connect(null, mapDispatchToProps)(App)
// Router can't be in the same component as Redirect
const RoutedApp = () => <Router><ConnectedApp /></Router>
export default RoutedApp
