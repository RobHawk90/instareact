class PhotoService {

  static like(photoId) {
    return dispatch => {
      fetch(`http://localhost:8080/api/fotos/${photoId}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, { method: 'post' })
        .then(res => {
          if (res.ok) return res.json()
          throw new Error('An error has occurred when liked a photo')
        })
        .then(likerOrDisliker => dispatch({ type: 'LIKE', photoId, likerOrDisliker }))
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
          dispatch({ type: 'COMMENT', photoId, comment })
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
        .then(photos => dispatch({ type: 'LIST', photos }))
    }
  }

}

export default PhotoService
