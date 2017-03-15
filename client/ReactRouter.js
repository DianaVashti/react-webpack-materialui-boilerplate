import ReactDom from 'react-dom'
import {Component} from 'react'
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LandingPage from './LandingPage'

export default class ReactRouter extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const landingPageComponent = (props, state, params) =>
      <LandingPage />

    return (
      <MuiThemeProvider>
        <Router history={browserHistory}>
          <Route path="*" component={landingPageComponent} />
        </Router>
      </MuiThemeProvider>
    )  
  }
}
