import React from 'react'
import {connect} from 'cerebral/react'
import {displayElapsed, displayTime} from '../../helpers/dateTime'
import tasksByDay from '../../computed/tasksByDay'
import Date from '../Date'

export default connect(
  { projects: 'projects.all.**',
    tasksByDay
  },
  function Tasks ({projects, tasksByDay}) {
    return (
      <div className='section'>
        {tasksByDay.map(day => (
          <table key={day.dayDate} className='table' style={{width: '100%'}}>
            <thead>
              <tr>
                <th colSpan='3'>
                  <Date date={day.date} />
                </th>
                <th style={{width: 100}}>{displayElapsed(day.totalElapsed)}</th>
              </tr>
            </thead>
            <tbody>
              {day.tasks.map(task =>
                <tr key={task.ref}>
                  <td style={{width: 60}}>{displayTime(task.startedAt)}</td>
                  <td>{task.description}</td>
                  <td style={{width: 160}}><a href='#'>{projects[task.projectRef].name}</a></td>
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
