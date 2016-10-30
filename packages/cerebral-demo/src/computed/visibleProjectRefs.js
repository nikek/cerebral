import {Computed} from 'cerebral'

export default Computed({
  projects: 'projects.all.**',
  filter: 'projects.$filter'
}, ({projects, filter}) => {
  return Object.keys(projects).filter((ref) => (
    !filter || projects[ref].name.indexOf(filter) >= 0
  ))
})
