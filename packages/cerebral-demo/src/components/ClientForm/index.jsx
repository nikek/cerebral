import React from 'react'
import {connect} from 'cerebral/react'
import Input from './Input'
import Textarea from '../Textarea'

export default connect(
  { draft: `clients.$draft`
  },
  { cancelEdit: 'clients.escPressed'
  },
  function ClientForm ({draft, cancelEdit}) {
    return (
      <div className='column'>
        <div className='card'>
          <div className='card-content'>
            <div className='media' onClick={() => cancelEdit()}>
              <div className='media-left'>
                <figure className='image is-32x32'>
                  <img src='http://placehold.it/64x64' alt='user' />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-5'>
                  {draft.name}
                </p>
                <p className='subtitle is-6'>@johnsmith</p>
              </div>
            </div>

            <div className='content'>
              <p className='control'>
                <Input field='name' autoFocus placeholder='CompanyName' />
              </p>
              <p className='control has-icon'>
                <Input field='email' placeholder='Email' />
                <i className='fa fa-envelope' />
              </p>
              <p className='control has-icon'>
                <Input field='phone' placeholder='Telephone' />
                <i className='fa fa-phone' />
              </p>
              <p className='control has-icon'>
                <Input field='image' placeholder='64x64 image url' />
                <i className='fa fa-image' />
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
