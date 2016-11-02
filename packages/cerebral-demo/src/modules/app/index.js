import {input, set, state, unset} from 'cerebral/operators'

export default {
  state: {
    $selectedView: 'Today',
    $lang: 'fr'
  },
  signals: {
    routed:
      [set(state`app.$selectedView`, 'Today')],
    langOptionChanged:
      [ set(state`app.$lang`, input`lang`),
        unset(state`app.$showLangSelector`)
      ],
    langClicked:
      [set(state`app.$showLangSelector`, true)]
  }
}
