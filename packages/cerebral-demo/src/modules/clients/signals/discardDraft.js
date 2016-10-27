import {set,state} from 'cerebral/operators'

export default [
  set(state`clients.$draft`, null),
  set(state`clients.$selected`, null),
]
