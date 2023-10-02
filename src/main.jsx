import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css"
import { Profile } from './pages/Profile'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile />
  </React.StrictMode>,
)
