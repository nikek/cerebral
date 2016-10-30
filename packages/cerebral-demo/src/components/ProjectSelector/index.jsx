import React from 'react'
import {connect} from 'cerebral/react'
import visibleProjectsByClient from '../../computed/visibleProjectsByClient'

export default connect(
  { projectsByClient: visibleProjectsByClient
  },
  { onBlur: 'projects.selectorInputBlur',
    onChange: 'projects.filterChanged'
  },
  function ProjectSelector ({projectsByClient, onBlur, onChange}) {
    return (
      <div className='card'>
        <header className='card-header'>
          <input className='input'
            placeholder='Find project...'
            autoFocus
            onChange={e => onChange({value: e.target.value})}
            onBlur={e => onBlur()}
            type='text' style={{border: 0, marginTop: '3px', boxShadow: 'none'}} />
        </header>
        <div className='card-content'>
          <div className='menu'>
            {projectsByClient.map(client => (
              <div key={client.name}>
                <p className='menu-label'>{client.name}</p>
                <ul className='menu-list'>
                  {client.projects.map(project => (
                    <li key={project.ref}>
                      &nbsp;&nbsp;<span className='tag'>{project.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
)
