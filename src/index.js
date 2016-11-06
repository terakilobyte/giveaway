import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import firebase from 'firebase'

const fireConn = firebase.initializeApp({
  apiKey: 'AIzaSyB3Cpcbsyp87bAqZKD3yl7I0HH0i8HSgMA',
  authDomain: 'testproject-25f17.firebaseapp.com',
  databaseURL: 'https://testproject-25f17.firebaseio.com',
  storageBucket: 'testproject-25f17.appspot.com',
  messagingSenderId: '192783215365'
})

ReactDOM.render(
  <App firebase={fireConn} />,
  document.getElementById('root')
)
