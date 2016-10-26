/* eslint-disable no-script-url */
import React from 'react'
import {connect} from 'cerebral/react'
import UpperTitle from '../UpperTitle'
import SideBar from '../SideBar'
import Timer from '../Timer'
import Today from '../Today'

export default connect({
  title: 'title'
}, {
  frontRouted: 'routed',
  adminRouted: 'admin.routed'
},
  function Demo (props) {
    const onAdminClicked = () => {
      props.adminRouted()
    }

    const onFrontClicked = () => {
      props.frontRouted()
    }

    return (
      <div className='container'>
        <section className='hero is-dark'>
          <div className='hero-body'>
            <h1 className='title'>Cerebral Demo</h1>
          </div>
        </section>
        <section className='section'>
          <div className='columns'>
            <SideBar />
            <div className='column'>
              <Timer />
              <div className='section'>
                <Today />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
)
