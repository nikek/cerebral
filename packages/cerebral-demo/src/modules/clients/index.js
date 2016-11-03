import {input, set, state} from 'cerebral/operators'
import addClient from './signals/addClient'
import discardDraft from './signals/discardDraft'
import saveDraft from './signals/saveDraft'
import selectClient from './signals/selectClient'
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
    $filter: '',
    $selected: null
  },
  signals: {
    addClicked: addClient,
    cardClicked: selectClient,
    enterPressed: saveDraft,
    escPressed: discardDraft,
    filterChanged:
      [set(state`clients.$filter`, input`filter`)],
    filterEnterPressed: addClient,
    formValueChanged: updateDraft,
    phoneClicked:
      [set(state`clients.$phone`, input`phone`)],
    routed:
      [set(state`app.$selectedView`, 'Clients')]
  }
}
