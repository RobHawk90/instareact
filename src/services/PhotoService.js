import { actionLike, actionComment, actionList, actionNotify } from '../actions/actionCreator'

class PhotoService {

  static like(photoId) {
    return dispatch => {
      fetch(`http://localhost:8080/api/fotos/${photoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, { method: 'post' })
        .then(res => {
          if (res.ok) return res.json()
          throw new Error('An error has occurred when liked a photo')
        })
        .then(likerOrDisliker => dispatch(actionLike(photoId, likerOrDisliker)))
    }
  }

  static comment(photoId, text, clearInputCallback) {
    return dispatch => {
      fetch(`http://localhost:8080/api/fotos/${photoId}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, {
        headers: new Headers({ 'Content-type': 'application/json' })
        , method: 'post'
        , body: JSON.stringify({ texto: text })
      })
        .then(res => {
          if (res.ok) return res.json()
          throw new Error('An error has occurred when commented a photo')
        })
        .then(comment => {
          clearInputCallback()
          return dispatch(actionComment(photoId, comment))
        })
    }
  }

  static list(login) {
    let url = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`

    if (login)
      url = `http://localhost:8080/api/public/fotos/${login}`

    return dispatch => {
      fetch(url)
        .then(res => {
          if (res.ok) return res.json()
          throw new Error(`An error has occurred when getting publications ${login}`)
        })
        .then(photos => {
          if (photos.length)
            dispatch(actionNotify(''))
          else
            dispatch(actionNotify(`Sorry, "${login}" seems not to exist...`))

          dispatch(actionList(photos))
        })
    }
  }

}

export default PhotoService
