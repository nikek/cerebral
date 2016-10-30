import React from 'react'
import {connect} from 'cerebral/react'
import ProjectSelector from '../ProjectSelector'
import selectedProject from '../../computed/selectedProject'

export default connect(
  { project: selectedProject,
    showSelector: 'projects.$showProjectSelector'
  },
  { onClick: 'projects.projectTagClicked'
  },
  function ProjectTag ({onClick, project, showSelector}) {
    return (
      <div className='control' style={{position: 'relative'}}>
        <span className='tag is-primary' onClick={() => onClick()}>{project ? project.name : 'no project'}</span>
        {showSelector
          ? <div style={{position: 'absolute', top: -3}}>
            <ProjectSelector />
          </div>
          : ''}
      </div>
    )
  }
)
