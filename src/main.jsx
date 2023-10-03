import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css"
import { NewMovie } from './pages/NewMovie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NewMovie />
  </React.StrictMode>,
)
