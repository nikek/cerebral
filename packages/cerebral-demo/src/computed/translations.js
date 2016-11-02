import {Computed} from 'cerebral'
import * as TRANSLATIONS from '../translations'

export default Computed(
  { lang: 'app.$lang'
  },
  function translations ({lang}) {
    return TRANSLATIONS[lang] || TRANSLATIONS.en
  }
)
