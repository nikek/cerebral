import React from 'react'
import {connect} from 'cerebral/react'
import translations from '../../computed/translations'

export default connect(({field}) => (
  { value: `clients.$draft.${field}`,
    t: translations
  }),
  { enterPressed: 'clients.enterPressed',
    escPressed: 'clients.escPressed',
    valueChanged: 'clients.formValueChanged'
  },
  function Input ({field, value, placeholder, autoFocus, enterPressed, escPressed, valueChanged, t}) {
    const onKeyPress = e => {
      switch (e.key) {
        case 'Enter': enterPressed(); break
        case 'Esc': escPressed(); break
        default: break // noop
      }
    }

    const onChange = e => {
      valueChanged({field, value: e.target.value})
    }
    console.log(t, placeholder)

    return (
      <input className='input' type='text'
        autoFocus={autoFocus}
        placeholder={t[placeholder]}
        onKeyPress={onKeyPress}
        onChange={onChange}
        value={value || ''}
        name={field}
        />
    )
  }
)
