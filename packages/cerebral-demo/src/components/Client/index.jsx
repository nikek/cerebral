import React from 'react'
import {connect} from 'cerebral/react'

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
                  <img src='http://placehold.it/64x64' alt='user' />
                </figure>
              </div>
              <div className='media-content'>
                <p className='title is-5'>{client.name}</p>
                <p className='subtitle is-6'>@johnsmith</p>
              </div>
            </div>

            <div className='content'>
              {client.notes}
            </div>
            <nav className='level'>
              <div className='level-left'>
                <a className='level-item'>
                  <span className='icon is-small'><i className='fa fa-phone'></i></span>
                </a>
                <a className='level-item'>
                  <span className='icon is-small'><i className='fa fa-envelope'></i></span>
                </a>
              </div>
              <div className='level-right'>
                <a className='level-item'>
                  <span className='icon is-small'><i className='fa fa-plus-circle'></i></span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    )
  }
)
