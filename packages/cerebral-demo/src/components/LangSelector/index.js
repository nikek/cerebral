import React from 'react'
import {connect} from 'cerebral/react'
import translations from '../../computed/translations'

import * as LANGS from '../../translations'

const LANG_OPTS = Object.keys(LANGS).map(l => (
  [l, LANGS[l].language]
))

export default connect(
  {
    t: translations,
    showSelector: 'app.$showLangSelector'
  },
  {
    onBackgroundClick: 'app.langSelectorBackgroundClicked',
    onClick: 'app.langSelectorClicked',
    onOptionClick: 'app.langOptionClicked'
  },
  function LangSelector ({showSelector, t, onBackgroundClick, onClick, onOptionClick}) {
    return (
      <div className='popup'>
        <a onClick={() => onClick()}>{t.language}</a>
        { showSelector
        ? <div>
          <div className='popupBackground' onClick={() => onBackgroundClick()} />
          <div className='popup-left'>
            <div className='menu'>
              <ul className='menu-list'>
                {LANG_OPTS.map(l => (
                  <li key={l[0]}
                    onClick={() => onOptionClick({lang: l[0]})}>
                    <a className={`${l[0] === t.lang ? 'is-active' : ''}`}>
                      {l[1]}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        : ''
        }
      </div>
    )
  }
)
