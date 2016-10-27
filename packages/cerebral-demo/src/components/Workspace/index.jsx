import React from 'react'
import {connect} from 'cerebral/react'
import Clients from '../Clients'
import Today from '../Today'

const VIEWS = {
  Clients,
  Today
}

export default connect({
  'selectedView': '$selectedView'
},
  function Workspace ({selectedView}) {
    const CurrentView = VIEWS[selectedView]
    return (
      <div className='section'>
        <CurrentView />
      </div>
    )
  }
)
