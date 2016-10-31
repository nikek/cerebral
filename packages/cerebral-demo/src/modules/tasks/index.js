import {set, state} from 'cerebral/operators'
import startStopRunning from './signals/startStopRunning'
import updateNow from './signals/updateNow'

export default {
  state: {
    all: {
      'cerebral-demo-01': {
        startedAt: '2016-10-26T20:18:36Z',
        endedAt: '2016-10-26T20:18:36Z',
        duration: 3009,
        projectRef: 'cerebral-demo',
        description: 'basic layout with bulma.io #view'
      }
    },
    $running: {}
  },
  signals: {
    routed:
      [set(state`$selectedView`, 'Tasks')],
    startStopClicked: startStopRunning,
    timeHasPassed: updateNow
  }
}
