import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import clients from './modules/clients'
import projects from './modules/projects'

import {Controller} from 'cerebral'
import {Container} from 'cerebral/react'
import Devtools from 'cerebral/devtools'
import Router from 'cerebral-router'
import {set, state} from 'cerebral/operators'

const controller = Controller({
  devtools: Devtools(),
  router: Router({
    routes: {
      '/': 'routed',
      '/clients': 'clients.routed',
      '/projects': 'projects.routed'
    },
    onlyHash: false
  }),
  state: {
    $selectedView: 'Today'
  },
  signals: {
    routed: [set(state`$selectedView`, 'Today')]
  },
  modules: {
    clients,
    projects
  }
})

render((
  <Container controller={controller} >
    <App />
  </Container>
), document.querySelector('#root'))
