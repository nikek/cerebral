import {input, set, state} from 'cerebral/operators'

export default [
  set(state`clients.$draft`, state`clients.all.${input`ref`}`)
]
