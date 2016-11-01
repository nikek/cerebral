import React from 'react'
import {connect} from 'cerebral/react'
import ProjectSelector from '../ProjectSelector'
import projectFromRef from '../../computed/projectFromRef'

export default connect(({projectRef}) => (
  { project: projectFromRef.props({projectRef}),
    showSelector: 'projects.$showProjectSelector'
  }),
  { onClick: 'projects.projectTagClicked'
  },
  function ProjectTag ({onClick, project, showSelector}) {
    return (
      <div className='control' style={{position: 'relative'}}>
        <span className='tag is-primary' onClick={() => onClick()}>
          {project.name}
        </span>
        {showSelector
          ? <div style={{position: 'absolute', top: -3}}>
            <ProjectSelector />
          </div>
          : ''}
      </div>
    )
  }
)
