import {input, set, state} from 'cerebral/operators'
import startStopRunning from './signals/startStopRunning'
import updateNow from './signals/updateNow'

export default {
  state: {
    all: {
      'cerebral-demo-01': {
        duration: 3009,
        description: 'basic layout with bulma.io #view',
        endedAt: '2016-10-26T20:18:36Z',
        projectRef: 'cerebral-demo',
        ref: 'cerebral-demo-01',
        startedAt: '2016-10-26T20:18:36Z'
      }
    },
    $running: {
      projectRef: 'no-project'
    }
  },
  signals: {
    enterPressed: startStopRunning,
    runningInputChanged:
      [set(state`tasks.$running.description`, input`description`)],
    routed:
      [set(state`$selectedView`, 'Tasks')],
    startStopClicked: startStopRunning,
    timeHasPassed: updateNow
  }
}
