import React from 'react'
import {connect} from 'cerebral/react'
import translations from '../../computed/translations'

export default connect(({field}) => (
  { value: `projects.$draft.${field}`,
    t: translations
  }),
  { enterPressed: 'projects.enterPressed',
    escPressed: 'projects.escPressed',
    valueChanged: 'projects.formValueChanged'
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
