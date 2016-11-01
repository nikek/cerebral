import React from 'react'
import {connect} from 'cerebral/react'
import Client from '../Client'
import ClientForm from '../ClientForm'
import visibleClientRefs from '../../computed/visibleClientRefs'

export default connect({
  selected: 'clients.$selected',
  clientRefs: visibleClientRefs
},
  function Clients ({selected, clientRefs}) {
    return (
      <div className='columns is-multiline'>
        {clientRefs.map(ref => (
          selected === ref
          ? <ClientForm key={ref} clientRef={ref} />
          : <Client key={ref} clientRef={ref} />
        ))}
      </div>
    )
  }
)
