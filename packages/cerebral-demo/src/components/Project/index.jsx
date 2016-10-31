import React from 'react'
import {connect} from 'cerebral/react'

export default connect(({projectRef}) => (
  { project: `projects.all.${projectRef}`,
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
              <div className='media-content'>
                <p className='title is-5'>{project.name}</p>
                <p className='subtitle is-6'>{client.name}</p>
              </div>
            </div>

            <div className='content'>
              {project.notes}
            </div>
            <nav className='level'>
              <div className='level-left'>
                <a className='level-item'>
                  <span className='icon is-small'><i className='fa fa-phone' /></span>
                </a>
                <a className='level-item'>
                  <span className='icon is-small'><i className='fa fa-envelope' /></span>
                </a>
              </div>
              <div className='level-right'>
                <a className='level-item'>
                  <span className='icon is-small'><i className='fa fa-plus-circle' /></span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
)
