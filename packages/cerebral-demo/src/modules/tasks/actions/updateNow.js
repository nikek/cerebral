import {now, serialize} from '../../../helpers/dateTime'

export default function updateNow ({state, controller}) {
  const timeHasPassed = controller.getSignal('tasks.timeHasPassed')

  if (state.get(`tasks.$now`)) {
    state.set(`tasks.$now`, serialize(now()))
    setTimeout(timeHasPassed, 1000)
  } else {
    // Now has been cleared: not running, no more updates
  }
}
