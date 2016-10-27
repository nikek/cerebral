/* eslint-disable no-script-url */
import React from 'react'
import {connect} from 'cerebral/react'
import Sidebar from '../Sidebar'
import Timer from '../Timer'
import Workspace from '../Workspace'

export default connect({
},
  function Demo (props) {
    return (
      <div className='container'>
        <section className='hero is-dark'>
          <div className='hero-body' style={{padding: '40px 20px'}}>
            <h1 className='title'>Cerebral Demo</h1>
          </div>
        </section>
        <section className='section'>
          <div className='columns'>
            <Sidebar />
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
