import {Computed} from 'cerebral'
import tasksForProject from './tasksForProject'

export default Computed(({projectRef}) => (
  { project: `projects.all.${projectRef}.**`,
    tasks: tasksForProject.props({projectRef})
  }),
  function projectWithDetails ({project, projectRef, tasks}) {
    const elapsed = tasks.reduce((sum, t) => sum + t.elapsed, 0)
    return Object.assign({}, project, {elapsed})
  }
)
