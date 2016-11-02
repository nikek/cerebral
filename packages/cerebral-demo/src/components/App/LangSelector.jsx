import React from 'react'
import {connect} from 'cerebral/react'
import translations from '../../computed/translations'

import * as LANGS from '../../translations'

const LANG_OPTS = Object.keys(LANGS).map(l => (
  [l, LANGS[l].language]
))

export default connect(
  { t: translations,
    showSelector: 'app.$showLangSelector'
  },
  { onChange: 'app.langOptionChanged',
    onClick: 'app.langClicked'
  },
  function LangSelector ({showSelector, t, onChange, onClick}) {
    if (showSelector) {
      return (
        <p className='control'>
          <span className='select is-small'>
            <select
              autoFocus
              value={t.lang}
              onChange={e => onChange({lang: e.target.value})}>
              {LANG_OPTS.map(l => (
                <option key={l[0]} value={l[0]}>
                  {l[1]}
                </option>
              ))}
            </select>
          </span>
        </p>
      )
    } else {
      return <a onClick={() => onClick()}>{t.language}</a>
    }
  }
)
