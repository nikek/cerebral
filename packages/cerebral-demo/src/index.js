import React from 'react'
import {render} from 'react-dom'
import {Controller} from 'cerebral'
import {Container} from 'cerebral/react'

// Modules
import Devtools from 'cerebral/devtools'
import Router from 'cerebral-router'
import app from './modules/app'
import clients from './modules/clients'
import projects from './modules/projects'
import tasks from './modules/tasks'

// Components
import App from './components/App'

const controller = Controller({
  strictRender: true,
  devtools: Devtools(),
  router: Router({
    routes: {
      '/': 'app.routed',
      '/clients': 'clients.routed',
      '/projects': 'projects.routed',
      '/tasks': 'tasks.routed'
    },
    onlyHash: false
  }),
  modules: {
    app,
    clients,
    projects,
    tasks
  }
})

render((
  <Container controller={controller} >
    <App />
  </Container>
), document.querySelector('#root'))
