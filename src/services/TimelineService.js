class TimelineService {

  static listFriendsPublications(login) {
    let url = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`

    if (login)
      url = `http://localhost:8080/api/public/fotos/${login}`

    return fetch(url)
      .then(res => res.json())
  }

  static likePhoto(id) {
    return fetch(`http://localhost:8080/api/fotos/${this.props.foto.id}/like?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
      .then(res => {
        if (res.ok) return res.json()
        throw new Error('An error was occurred when liked a photo')
      })
  }

}

export default TimelineService
