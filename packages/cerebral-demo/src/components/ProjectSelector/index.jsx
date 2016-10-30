import React from 'react'
import {connect} from 'cerebral/react'
import visibleProjectRefs from '../../computed/visibleProjectRefs'

export default connect({
  projectRefs: visibleProjectRefs,
  projects: 'projects.all'
},
  function ProjectSelector ({projects, projectRefs}) {
    return (
      <p className='control'>
        <span className='select'>
          <select>
            {projectRefs.map(ref => (
              <option key={ref}>{projects[ref].name}</option>
            ))}
            <option>+</option>
          </select>
        </span>
      </p>
    )
  })
