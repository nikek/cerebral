import React from 'react'
import {connect} from 'cerebral/react'
import Client from '../Client'
import ClientForm from '../ClientForm'
import visibleClientRefs from '../../computed/visibleClientRefs'

export default connect({
  selectedClient: 'clients.$selected',
  clientRefs: visibleClientRefs
},
  function Clients ({selectedClient, clientRefs}) {
    return (
      <div className='columns is-multiline'>
        {clientRefs.map(ref => (
          selectedClient === ref
          ? <ClientForm key={ref} clientRef={ref} />
          : <Client key={ref} clientRef={ref} />
        ))}
      </div>
    )
  }
)
