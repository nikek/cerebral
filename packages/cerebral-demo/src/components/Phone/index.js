import React from 'react'
import {connect} from 'cerebral/react'

export default connect(
  {},
  { onClick: 'clients.phoneClicked'
  },
  function Phone ({phone, onClick}) {
    if (phone) {
      return <a className='level-item'
        onClick={() => onClick({phone})}>
        <span className='icon is-small'><i className='fa fa-phone' /></span>
      </a>
    } else {
      return <a className='level-item'>
        <span className='icon is-small'><i className='fa fa-phone' style={{color: '#ccc'}} /></span>
      </a>
    }
  }
)
