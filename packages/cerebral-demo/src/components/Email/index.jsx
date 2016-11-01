import React from 'react'
import {connect} from 'cerebral/react'

export default connect(
  {},
  function Phone ({email}) {
    if (email) {
      return <a className='level-item'
        href={`mailto:${email}`}>
        <span className='icon is-small'><i className='fa fa-envelope' /></span>
      </a>
    } else {
      return <a className='level-item'>
        <span className='icon is-small'><i className='fa fa-envelope' style={{color: '#ccc'}} /></span>
      </a>
    }
  }
)
