import React from 'react'
import {render} from 'react-dom'
import Demo from './components/Demo'
import clients from './modules/clients'

import {Controller} from 'cerebral'
import {Container} from 'cerebral/react'
import Devtools from 'cerebral/devtools'
import Router from 'cerebral-router'
import {set, state} from 'cerebral/operators'

const controller = Controller({
  devtools: Devtools(),
  router: Router({
    routes: {
      '/': 'routed'
    },
    onlyHash: false,
  }),
  state: {
    $selectedView: 'Today'
  },
  signals: {
    routed: [set(state`$selectedView`, 'Today')]
  },
  modules: {
    clients
  }
})

render((
  <Container controller={controller} >
    <Demo />
  </Container>
), document.querySelector('#root'))
