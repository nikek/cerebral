/* eslint-disable no-script-url */
import React from 'react'
import {connect} from 'cerebral/react'
import Menu from '../Menu'
import Timer from '../Timer'
import Workspace from '../Workspace'
import translations from '../../computed/translations'

export default connect(
  { t: translations
  },
  function Demo ({t}) {
    return (
      <div className='container'>
        <section className='hero is-dark'>
          <div className='hero-body' style={{padding: '40px 20px'}}>
            <h1 className='title'>{t.CerebralDemo}</h1>
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
