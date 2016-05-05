export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to server

    // If request is good:
    // - update state to indicate user is authenticated
    // - save the JWT token
    // - redirect to the route '/feature'

    // If request is bad:
    // - show an error to the user
  }
}
