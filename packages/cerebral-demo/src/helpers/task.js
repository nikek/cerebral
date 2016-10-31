import {parse, displayDuration, now} from './dateTime'

const anyTime = now()
const noDurationString = displayDuration(anyTime, anyTime)

export const displayTaskDuration = (task) => {
  if (task.startedAt) {
    const fromDateTime = parse(task.startedAt)
    const toDateTime = parse(task.endedAt)
    return displayDuration(fromDateTime, toDateTime)
  } else {
    return noDurationString
  }
}
