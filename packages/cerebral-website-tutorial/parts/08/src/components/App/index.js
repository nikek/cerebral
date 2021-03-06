import React from 'react'
import { connect } from 'cerebral/react'
import HeaderButton from '../HeaderButton'
import Toast from '../Toast'
import Input from '../Input'

export default connect({
  appTitle: 'appTitle'
}, {
}, function App (props) {
  return (
    <div className='o-container o-container--medium'>
      <h1 className='u-high'>{ props.appTitle }</h1>
      <HeaderButton />
      <Input />
      <Toast />
    </div>
  )
}
)
