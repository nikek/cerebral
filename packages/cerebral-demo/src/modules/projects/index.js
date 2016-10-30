import {input, set, state} from 'cerebral/operators'

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
    selectorInputBlur:
      [ set(state`projects.$showProjectSelector`, false),
        set(state`projects.$filter`, '')
      ],
    filterChanged:
      [set(state`projects.$filter`, input`value`)]
  }
}
