class PhotoService {

  static like(id) {
    return fetch(`http://localhost:8080/api/fotos/${id}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, { method: 'post' })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error('An error was occurred when liked a photo')
      })
  }

  static comment(id, text) {
    return fetch(`http://localhost:8080/api/fotos/${id}/comment?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`, {
      headers: new Headers({ 'Content-type': 'application/json' })
      , method: 'post'
      , body: JSON.stringify({ texto: text })
    })
      .then(res => {
        if (res.ok) return res.json()
        throw new Error('An error was occurred when commented a photo')
      })
  }

}

export default PhotoService
