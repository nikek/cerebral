import {Computed} from 'cerebral'

export default Computed({
  clients: 'clients.all.**',
  filter: 'clients.$filter'
}, ({clients, filter}) => {
  const f = filter.toLowerCase()
  return Object.keys(clients).filter((ref) => (
    !filter || clients[ref].name.toLowerCase().indexOf(f) >= 0
  ))
})
