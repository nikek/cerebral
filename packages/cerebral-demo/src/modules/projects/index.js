import {input, set, state} from 'cerebral/operators'
import closeProjectSelector from './signals/closeProjectSelector'

export default {
  state: {
    all: {
      'cerebral-demo': {
        ref: 'cerebral-demo',
        name: 'Cerebral-demo',
        clientRef: 'incal'
      },
      'learn-inferno': {
        ref: 'learn-inferno',
        name: 'Learn Inferno',
        clientRef: 'no_client'
      },
      'read-calvin': {
        ref: 'read-calvin',
        name: 'Read Calvin',
        clientRef: 'calvin'
      }
    },
    $filter: ''
  },
  signals: {
    routed:
      [set(state`$selectedView`, 'Projects')],
    projectTagClicked:
      [set(state`projects.$showProjectSelector`, true)],
    selectorBackgroundClick: closeProjectSelector,
    filterChanged:
      [set(state`projects.$filter`, input`value`)],
    selectorProjectClicked:
      [ set(state`projects.$selected`, input`ref`),
        ...closeProjectSelector
      ],
    cardClicked:
      [ set(state`projects.$selected`, input`ref`),
        set(state`projects.$draft`, state`projects.all.${input`ref`}`)
      ]
  }
}
