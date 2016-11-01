import React from 'react'
import {connect} from 'cerebral/react'
import {displayElapsed, displayTime} from '../../helpers/dateTime'
import tasksByDay from '../../computed/tasksByDay'
import Date from '../Date'

export default connect(
  { tasksByDay
  },
  function Tasks ({tasksByDay}) {
    return (
      <div className='section'>
        {tasksByDay.map(day => (
          <table key={day.dayDate} className='table'>
            <thead>
              <tr>
                <th colSpan='3'>
                  <Date date={day.date} />
                </th>
                <th>{displayElapsed(day.totalElapsed)}</th>
              </tr>
            </thead>
            <tbody>
              {day.tasks.map(task =>
                <tr key={task.ref}>
                  <td>{displayTime(task.startedAt)}</td>
                  <td>{task.description}</td>
                  <td><a href='#'>project-link-todo</a></td>
                  <td>{displayElapsed(task.elapsed)}</td>
                </tr>
              )}
            </tbody>
          </table>
        ))}
      </div>
    )
  }
)
