import {now, serialize} from '../../../helpers/dateTime'

export default function startNewTask ({state}) {
  const startedAt = serialize(now())
  state.set(`tasks.$now`, startedAt)
  state.set(`tasks.$running`, {startedAt})
}
