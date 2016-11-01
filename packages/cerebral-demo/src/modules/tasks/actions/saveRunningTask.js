import makeRef from '../../../helpers/ref'
import {now} from '../../../helpers/dateTime'

export default function saveRunningTask ({state}) {
  const endedAt = now()
  const ref = makeRef()
  const draft = state.get('tasks.$running')
  state.set(`tasks.all.${ref}`,
    Object.assign({}, draft, {ref, endedAt})
  )
}
