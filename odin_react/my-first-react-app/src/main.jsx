import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Gre from '../Greetings.jsx'
// import Animol from '../Animals.jsx'
import AppJoke from '../DadJokes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Gre/>
    <App />
    <AppJoke />
  </React.StrictMode>,
)
