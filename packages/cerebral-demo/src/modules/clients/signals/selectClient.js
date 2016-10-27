import {set,state,input} from 'cerebral/operators'

export default [
  set(state`clients.$selected`, input`clientRef`)
]
