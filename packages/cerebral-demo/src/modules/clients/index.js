import {input, set, state} from 'cerebral/operators'
import selectClient from './signals/selectClient'
import saveDraft from './signals/saveDraft'
import discardDraft from './signals/discardDraft'
import updateDraft from './signals/updateDraft'

export default {
  state: {
    all: {
      'cerebral': {
        name: 'Cerebral',
        notes: 'Make sense of complex apps.',
        ref: 'cerebral',
        image: '/cerebral-mini.png',
        website: 'cerebraljs.com'
      },
      'calvin': {
        ref: 'calvin',
        name: 'Calvin and Hobbes Ltd',
        email: 'calvin@hobbes.com',
        phone: '123456789'
      },
      'largo': {
        ref: 'largo',
        name: 'Largo Winch et al'
      },
      'no-client': {
        ref: 'no-client',
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
    formValueChanged: updateDraft,
    phoneClicked: [set(state`clients.$phone`, input`phone`)]
  }
}
