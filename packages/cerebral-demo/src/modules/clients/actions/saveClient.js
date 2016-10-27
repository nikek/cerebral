
export default function saveDraft ({state}) {
  const draft = state.get('clients.$draft')
  const clientRef = state.get('clients.$selected')
  const selectedClientPath = `clients.all.${clientRef}`

  Object.keys(draft).forEach(k => {
    state.set(`${selectedClientPath}.${k}`, draft[k])
  })
}
