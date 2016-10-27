import React from 'react'
import {connect} from 'cerebral/react'

export default connect(({clientRef}) => ({
  'client': `clients.all.${clientRef}`,
}),
  function Client ({client}) {
    return (
      <div className='card'>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a href='#'>@bulmaio</a>.
            <a href='#'>#css</a> <a href='#'>#responsive</a>
            <br />
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    )
  }
)
