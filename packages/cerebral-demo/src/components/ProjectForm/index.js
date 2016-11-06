import React from 'react'
import {connect} from 'cerebral/react'
import Input from './Input'
import Select from './Select'
import Textarea from '../Textarea'

export default connect(
  {
    clients: 'clients.all.**',
    project: `projects.$draft.**`
  },
  {
    cancelEdit: 'projects.escPressed'
  },
  function ProjectForm ({clients, project, cancelEdit}) {
    const client = clients[project.clientRef]
    return (
      <div className='column'>
        <div className='card'>
          <div className='card-content'>
            <div className='media' onClick={() => cancelEdit()}>
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
            </div>

            <div className='content'>
              <p className='control'>
                <Input field='name' autoFocus placeholder='ProjectName' />
              </p>
              <p className='control'>
                <Select field='clientRef' />
              </p>
              <p className='control'>
                <Textarea field='notes' placeholder='Notes' />
              </p>
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
