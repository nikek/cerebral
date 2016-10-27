import React from 'react'
import {connect} from 'cerebral/react'
import Client from '../Client'
import visibleClientRefs from '../../computed/visibleClientRefs'

export default connect({
  selectedClient: 'clients.$selected',
  clientRefs: visibleClientRefs()
},
  function Clients ({clientRefs}) {
    return (
      <div className='columns is-multiline'>
        {clientRefs.map(ref => (
          <div className='column'>
            <Client key={ref} clientRef={ref} />
          </div>
        ))}
      </div>
    )
  }
)
