import React from 'react'
import {connect} from 'cerebral/react'
import visibleProjectRefs from '../../computed/visibleProjectRefs'

export default connect({
  selectedProject: 'projects.$selected',
  projectRefs: visibleProjectRefs
},
  function Clients ({selectedProject, projectRefs}) {
    return (
      <div className='columns is-multiline'>
        {projectRefs.map(ref => (
          'TODO'
        ))}
      </div>
    )
  }
)
