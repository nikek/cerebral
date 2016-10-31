import {Computed} from 'cerebral'

export default Computed({
  now: 'tasks.$now',
  task: 'tasks.$running.**'
}, ({now, task}) => {
  if (task.startedAt) {
    return Object.assign({}, task, {endedAt: now})
  } else {
    return task
  }
})
