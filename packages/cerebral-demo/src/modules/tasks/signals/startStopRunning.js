import {unset, set, state, when} from 'cerebral/operators'
import startNewTask from '../actions/startNewTask'
import updateNow from './updateNow'

export default [
  when(state`tasks.$running.startedAt`), {
    true: [
      /* TODO: saveRunningTask */
      set(state`tasks.$running`, {}),
      unset(state`tasks.$now`)
    ],
    false: [
      startNewTask,
      ...updateNow
    ]
  }
]
