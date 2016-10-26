import React from 'react'
import {connect} from 'cerebral/react'

export default connect({
},
  function Timer (props) {
    return (
      <nav className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <p className='control has-addons'>
              <input className='input' type='text' style={{width:300}} placeholder='What do you want to do ?' />
              <button className='button'>Start</button>
            </p>
          </div>
        </div>
        <div className='level-right'>
          <div className='level-item'>
            <h3 className='title is-4'>0:00:00</h3>
          </div>
        </div>
      </nav>
    )
  }
)
