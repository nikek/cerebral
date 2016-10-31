import {input, set, state} from 'cerebral/operators'

export default [
  set(state`clients.$selected`, input`ref`),
  set(state`clients.$draft`, state`clients.all.${input`ref`}`)
]
