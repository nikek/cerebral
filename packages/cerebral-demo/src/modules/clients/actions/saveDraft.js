function saveDraft ({state, path}) {
  const draft = state.get('clients.$draft')
  const clientRef = draft.ref

  state.set(`clients.all.${clientRef}`, draft)

  return path.success()
}

export default saveDraft
