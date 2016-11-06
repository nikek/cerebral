import React from 'react'
import {connect} from 'cerebral/react'
import projectWithDetails from '../../computed/projectWithDetails'
import {displayElapsed} from '../../helpers/dateTime'

export default connect(({projectRef}) => (
  { project: projectWithDetails.props({projectRef}),
    clients: 'clients.all.**'
  }),
  { cardClicked: 'projects.cardClicked'
  },
  function project ({clients, project, cardClicked}) {
    const client = clients[project.clientRef]
    return (
      <div className='column'>
        <div className='card' onClick={() => cardClicked({ref: project.ref})}>
          <div className='card-content'>
            <div className='media'>
              <div className='media-left'>
                <span className='icon is-medium'>
                  <i className='fa fa-folder' />
                </span>
              </div>
              <div className='media-content'>
                <p className='title is-5'>
                  {project.name}
                </p>
                <p className='subtitle is-6'>{client.name}</p>
              </div>
              <div className='media-right'>
                {displayElapsed(project.elapsed)}
              </div>
            </div>

            <div className='content'>
              {project.notes}
            </div>

            <nav className='level'>
              <div className='level-left' />
              <div className='level-right'>
                <a className='level-item'>
                  {/* click on this should show tasks from this project in Report */}
                  <span className='icon is-small'><i className='fa fa-tasks' /></span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
)
