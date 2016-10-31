import React from 'react'
import {connect} from 'cerebral/react'
import SelectedProjectTag from '../SelectedProjectTag'
import {displayTaskDuration} from '../../helpers/task'
import runningTask from '../../computed/runningTask'

export default connect(
  { task: runningTask
  },
  { onClick: 'tasks.startStopClicked'
  },
  function Timer ({task, onClick}) {
    return (
      <nav className='level'>
        <div className='level-left'>
          <div className='level-item'>
            <p className='control has-addons'>
              <input className='input' type='text' style={{width: 230}}
                value={task.description}
                placeholder='What do you want to do ?' />
              <button className='button' onClick={() => onClick()}>
                {task.startedAt ? 'Stop' : 'Start'}
              </button>
            </p>
          </div>
          <div className='level-item'>
            <SelectedProjectTag />
          </div>
        </div>
        <div className='level-right'>
          <div className='level-item'>
            <h3 className='title is-4'>
              {displayTaskDuration(task)}
            </h3>
          </div>
        </div>
      </nav>
    )
  }
)
