import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import signIn from './github_auth.js'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      signedIn: false,
      error: null
    }
    this.signUp = this.signUp.bind(this)
    this.success = this.success.bind(this)
    this.failure = this.failure.bind(this)
  }

  signUp () {
    signIn(this.success, this.failure)
  }

  failure (message) {
    this.setState({
      error: message
    })
  }

  success (user) {
    this.setState({
      user: user,
      signedIn: true
    })
  }

  render () {
    let display = !this.state.signedIn
      ? <div>
        <h3>Signup for the Macbook Pro Giveaway!</h3>
        <p> Please only sign up if you will use the computer. I'd like it to go to someone that will put it to good use. </p>
        <p> To sign up, you'll need a GitHub account. Only one entry per person. </p>
        <p> Click below to sign up! </p>
        <button onClick={this.signUp}>Sign Up!</button>
      </div>
      : <div>
        <h2>Thanks for entering, {this.state.user}</h2>
      </div>

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to FreeCodeCamp Seattle!</h2>
        </div>
        {this.state.error ? this.state.error : display}
      </div>
    )
  }
}

App.propTypes = {
  firebase: React.PropTypes.object.isRequired
}

export default App
