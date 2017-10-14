class TimelineService {

  static listFriendsPublications() {
    return fetch(`http://localhost:8080/api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}`)
      .then(res => res.json())
  }

}

export default TimelineService
