import {Computed} from 'cerebral'

export default Computed({
  clients: 'clients.all.**',
  filter: 'clients.$filter'
}, ({clients, filter}) => {
  return Object.keys(clients).filter((ref) => (
    ref !== 'no_client' &&
    (!filter || clients[ref].name.indexOf(filter) >= 0)
  ))
})
