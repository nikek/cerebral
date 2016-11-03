import React from 'react'
import {connect} from 'cerebral/react'
import Client from '../Client'
import ClientForm from '../ClientForm'
import visibleClientRefs from '../../computed/visibleClientRefs'
import translations from '../../computed/translations'

export default connect(
  { clientRefs: visibleClientRefs,
    filter: 'clients.$filter',
    selected: 'clients.$selected',
    t: translations
  },
  { enterPressed: 'clients.filterEnterPressed',
    onChange: 'clients.filterChanged',
    onClick: 'clients.addClicked'
  },
  function Clients ({clientRefs, filter, selected, t, enterPressed, onChange, onClick}) {
    const onKeyPress = e => {
      switch (e.key) {
        case 'Enter': enterPressed(); break
        default: break // noop
      }
    }
    return (
      <div>
        <div className='level'>
          <div className='level-left'>
            <div className='level-item'>
              <p className='control has-addons'>
                <input className='input'
                  placeholder={t.ClientNamePlaceholder}
                  value={filter || ''}
                  onChange={e => onChange({filter: e.target.value})}
                  onKeyPress={onKeyPress}
                  />
                <button className='button is-primary'
                  onClick={() => onClick()}>
                  {t.Add}
                </button>
              </p>
            </div>
          </div>
        </div>
        <div className='columns is-multiline'>
          {clientRefs.map(ref => (
            selected === ref
            ? <ClientForm key={ref} clientRef={ref} />
            : <Client key={ref} clientRef={ref} />
          ))}
        </div>
      </div>
    )
  }
)
