import React from 'react'
import {connect} from 'cerebral/react'
import visibleProjectRefs from '../../computed/visibleProjectRefs'
import Project from '../Project'

export default connect({
  selectedProject: 'projects.$selected',
  projectRefs: visibleProjectRefs
},
  function Projects ({selectedProject, projectRefs}) {
    return (
      <div className='columns is-multiline'>
        {projectRefs.map(ref => (
          selectedProject === ref
          ? ''
          : <Project key={ref} projectRef={ref} />
        ))}
      </div>
    )
  }
)
