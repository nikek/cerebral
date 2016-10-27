import {set, state} from 'cerebral/operators'

export default {
  state: {
    all: {
      incal: {name: 'Incal Inc'},
      calvin: {name: 'Calvin and Hobbes Ltd'},
      largo: {name: 'Largo Winch et al'}
    },
    $selected: null,
  },
  routes: {
    '/': 'routed'
  },
  signals: {
    routed: [set(state`$selectedView`, 'Clients')]
  }
}
