import {Computed} from 'cerebral'

export default Computed({
  projects: 'projects.all.**',
  selected: 'projects.$selected'
}, ({projects, selected}) => projects[selected]
)
