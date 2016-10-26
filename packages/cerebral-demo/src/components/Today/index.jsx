import React from 'react'
import {connect} from 'cerebral/react'

export default connect({
},
  function SideBar (props) {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th colSpan='2'>Today</th>
            <th>0:32:15</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>base UI</td>
            <td><a href='#'>Cerebral-demo</a></td>
            <td>0:32:15</td>
          </tr>
        </tbody>
      </table>
    )
  }
)
