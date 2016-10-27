import {set, state} from 'cerebral/operators'
import saveDraft from '../actions/saveDraft'

export default [
  saveDraft,
  { success: [set(state`clients.$selected`, null)],
    error: []
  }
]
