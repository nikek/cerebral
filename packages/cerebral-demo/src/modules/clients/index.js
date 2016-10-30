import {set, state} from 'cerebral/operators'
import selectClient from './signals/selectClient'
import saveDraft from './signals/saveDraft'
import discardDraft from './signals/discardDraft'
import updateDraft from './signals/updateDraft'

export default {
  state: {
    all: {
      incal: {
        name: 'Incal Inc',
        notes: 'Could collaborate on AI projects.',
        ref: 'incal'
      },
      calvin: {
        ref: 'calvin',
        name: 'Calvin and Hobbes Ltd'
      },
      largo: {
        ref: 'largo',
        name: 'Largo Winch et al'
      },
      no_client: {
        ref: 'no_client',
        name: 'No client'
      }
    },
    $selected: null
  },
  signals: {
    routed: [set(state`$selectedView`, 'Clients')],
    cardClicked: selectClient,
    enterPressed: saveDraft,
    escPressed: discardDraft,
    formValueChanged: updateDraft
  }
}
