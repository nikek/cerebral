import React from 'react'
import {connect} from 'cerebral/react'
import Input from './Input'
import Textarea from '../Textarea'

export default connect(
  { client: `clients.$draft.**`
  },
  { cancelEdit: 'clients.escPressed'
  },
  function ClientForm ({client, cancelEdit}) {
    return (
      <div className='column'>
        <div className='card'>
          <div className='card-content'>
            <div className='media' onClick={() => cancelEdit()}>
              <div className='media-left'>
                <figure className='image is-32x32'>
                  <img src={client.image || 'client-mini.png'} alt='user' />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-5'>
                  {client.name}
                </p>
                {client.website
                  ? <p className='subtitle is-6'>
                    <a href={`http://${client.website}`}>{client.website}</a>
                  </p>
                  : ''
                }
              </div>
            </div>

            <div className='content'>
              <p className='control'>
                <Input field='name' autoFocus placeholder='CompanyName' />
              </p>
              <p className='control has-icon'>
                <Input field='image' placeholder='ImageUrl' />
                <i className='fa fa-image' />
              </p>
              <p className='control has-icon'>
                <Input field='website' placeholder='WebsiteUrl' />
                <i className='fa fa-globe' />
              </p>
              <p className='control has-icon'>
                <Input field='email' placeholder='Email' />
                <i className='fa fa-envelope' />
              </p>
              <p className='control has-icon'>
                <Input field='phone' placeholder='Telephone' />
                <i className='fa fa-phone' />
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
