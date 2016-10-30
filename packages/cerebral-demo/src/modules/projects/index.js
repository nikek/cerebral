import {set, state} from 'cerebral/operators'

export default {
  state: {
    all: {
      'cerebral-demo': {name: 'Cerebral-demo'}
    }
  },
  signals: {
    routed: [set(state`$selectedView`, 'Projects')]
  }
}
