import makeRef from '../../../helpers/ref'
import {elapsedSeconds, now, parse, serialize} from '../../../helpers/dateTime'

export default function saveRunningTask ({state}) {
  const draft = state.get('tasks.$running')
  const startedAt = parse(draft.startedAt)
  const endedAt = now()
  const elapsed = elapsedSeconds(startedAt, endedAt)
  const ref = makeRef()
  state.set(`tasks.all.${ref}`,
    Object.assign({}, draft,
      {elapsed, endedAt: serialize(endedAt), ref}
    )
  )
}
