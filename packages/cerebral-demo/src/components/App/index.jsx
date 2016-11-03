/* eslint-disable no-script-url */
import React from 'react'
import {connect} from 'cerebral/react'
import LangSelector from './LangSelector'
import Menu from '../Menu'
import Timer from '../Timer'
import Workspace from '../Workspace'
import translations from '../../computed/translations'

import './style.scss'

const TaglineRe = /^(.*)\[Cerebral\](.*)$/

export default connect(
  { t: translations
  },
  function Demo ({t}) {
    let tagline = <h2 className='subtitle'>
      {t.SiteTagLine}
    </h2>
    const m = TaglineRe.exec(t.SiteTagLine)
    if (m) {
      tagline = <h2 className='subtitle'>
        {m[1]}
        <a href='http://cerebraljs.com'>Cerebral</a>
        {m[2]}
      </h2>
    }
    return (
      <div className='container'>
        <section className='hero is-dark'>
          <div className='hero-head'>
            <div className='container'>
              <nav className='nav'>
                <div className='nav-left'>
                  <a className='nav-item is-brand' style={{paddingLeft: 20}}>
                    <img src='/cerebral-logo.png' alt='Cerebral logo' />
                  </a>
                </div>
                <div className='nav-right'>
                  <div className='nav-item' style={{paddingRight: 20}}>
                    <LangSelector />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className='hero-body' style={{paddingLeft: 20}}>
            <div className='container'>
              <h1 className='title'>{t.CerebralDemo}</h1>
              {tagline}
            </div>
          </div>
        </section>
        <section className='section'>
          <div className='columns'>
            <Menu />
            <div className='column'>
              <Timer />
              <Workspace />
            </div>
          </div>
        </section>
      </div>
    )
  }
)
