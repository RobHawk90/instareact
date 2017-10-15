class TimelineService {

  static listFriendsPublications(login) {
    let url = `http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`

    if (login)
      url = `http://localhost:8080/api/public/fotos/${login}`

    return fetch(url)
      .then(res => res.json())
  }

}

export default TimelineService
