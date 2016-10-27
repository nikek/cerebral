import {Computed} from 'cerebral'

export default Computed({
  clients: 'clients.all.**',
  filter: 'clients.$filter'
}, ({clients, filter}) => {
  return Object.keys(clients).filter((ref) => (
    !filter || clients[ref].name.indexOf(filter) >= 0
  ))
})
