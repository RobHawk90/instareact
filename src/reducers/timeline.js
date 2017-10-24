export function timelineReducer(state = [], action) {

  if (action.type === 'LIKE') {
    const photo = state.find(photo => photo.id === action.photoId)
    const desliker = photo.likers.find(liker => liker.login === action.likerOrDisliker.login)

    if (desliker) photo.likers.splice(photo.likers.indexOf(desliker), 1)
    else photo.likers.push(action.likerOrDisliker)

    photo.likeada = !photo.likeada

    return state
  }

  if (action.type === 'COMMENT') {
    const photo = state.find(photo => photo.id === action.photoId)

    photo.comentarios.push(action.comment)

    return state
  }

  if (action.type === 'LIST') {
    return action.photos
  }

}
