import firebase from 'firebase'

function signIn (success, failure) {
  const provider = new firebase.auth.GithubAuthProvider()
  provider.addScope('repo')
  firebase.auth().signInWithPopup(provider).then(function (result) {
    var user = result.user.displayName
    console.log(user)
    success(user)
  }).catch(function (error) {
    if (error.code === 'auth/account-exists-with-different-credential') {
      alert('You have signed up with a different provider for that email.')
      // Handle linking here if your app allows it.
    } else {
      console.error(error.message)
      failure(error.message)
    }
  })
}

module.exports = signIn
