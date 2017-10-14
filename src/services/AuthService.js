class AuthService {

  static getAuthToken(user) {
    return fetch('http://localhost:8080/api/public/login', {
      headers: new Headers({ 'Content-type': 'application/json' })
      , method: 'post'
      , body: JSON.stringify(user)
    })
      .then(res => {
        if (res.ok) return res.text()
        throw new Error("wasn't possible to authenticate, check your credentials.")
      })
  }

}

export default AuthService
