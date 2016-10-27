import {set, state} from 'cerebral/operators'
import saveClient from '../actions/saveClient'

export default [
  saveClient,
  set(state`clients.$selected`, null),
  set(state`clients.$draft`, null)
  /*
  { success: [set(state`clients.$selected`, null)],
    error: []
  }
  */
]
