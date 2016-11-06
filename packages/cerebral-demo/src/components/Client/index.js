import React from 'react'
import {connect} from 'cerebral/react'
import Email from '../Email'
import Phone from '../Phone'

export default connect(({clientRef}) => (
  { client: `clients.all.${clientRef}`
  }),
  { cardClicked: 'clients.cardClicked'
  },
  function Client ({client, cardClicked}) {
    return (
      <div className='column'>
        <div className='card' onClick={() => cardClicked({ref: client.ref})}>
          <div className='card-content'>
            <div className='media'>
              <div className='media-left'>
                <figure className='image is-32x32'>
                  <img src={client.image || 'client-mini.png'} alt='user' />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-5'>{client.name}</p>
                {client.website
                  ? <p className='subtitle is-6'>
                    <a href={`http://${client.website}`}>{client.website}</a>
                  </p>
                  : ''
                }
              </div>
            </div>

            <div className='content'>
              {client.notes}
            </div>
            <nav className='level'>
              <div className='level-left'>
                <Phone phone={client.phone} />
                <Email email={client.email} />
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
