import React from 'react'
import {connect} from 'cerebral/react'

export default connect({
  selectedView: '$selectedView'
},
  function Navbar ({selectedView}) {
    return (
      <div className='column is-2'>
        <aside className='menu'>
          <p className='menu-label'>Work</p>
          <ul className='menu-list'>
            <li>
              <a className={`${selectedView === 'Today' ? 'is-active' : ''}`}
               href='/'>
                <span className='icon is-small'><i className='fa fa-clock-o'></i></span>
                &nbsp;Today
              </a>
            </li>
            <li>
              <a href='#'>
                <span className='icon is-small'><i className='fa fa-bar-chart'></i></span>
                &nbsp;Report
              </a>
            </li>
          </ul>
          <p className='menu-label'>Manage</p>
          <ul className='menu-list'>
            <li>
              <a className={`${selectedView === 'Clients' ? 'is-active' : ''}`}
                 href='/clients'>
                <span className='icon is-small'><i className='fa fa-users'></i></span>
                &nbsp;Clients
              </a>
            </li>
            <li>
              <a href='#'>
                <span className='icon is-small'><i className='fa fa-folder'></i></span>
                &nbsp;Projects
              </a>
            </li>
            <li>
              <a href='#'>
                <span className='icon is-small'><i className='fa fa-tasks'></i></span>
                &nbsp;Tasks
              </a>
            </li>
          </ul>
        </aside>
      </div>
    )
  }
)