function _changePhoto(state, photoId, callback) {
  const newState = [...state]
  const oldPhoto = newState.find(photo => photo.id === photoId)
  const newProps = callback(oldPhoto)
  const newPhoto = { ...oldPhoto, ...newProps }

  newState[newState.indexOf(oldPhoto)] = newPhoto

  return newState
}

export function timelineReducer(state = [], action) {

  if (action.type === 'LIKE') {
    return _changePhoto(state, action.photoId, oldPhoto => {
      const desliker = oldPhoto.likers.find(liker => liker.login === action.likerOrDisliker.login)
      const newLikers = [...oldPhoto.likers]

      if (desliker) newLikers.splice(oldPhoto.likers.indexOf(desliker), 1)
      else newLikers.push(action.likerOrDisliker)

      return { likeada: !oldPhoto.likeada, likers: newLikers }
    })
  }

  if (action.type === 'COMMENT') {
    return _changePhoto(state, action.photoId, oldPhoto => {
      const newComments = [...oldPhoto.comentarios]
      newComments.push(action.comment)
      return { comentarios: newComments }
    })
  }

  if (action.type === 'LIST') {
    return action.photos
  }

  return state
}
