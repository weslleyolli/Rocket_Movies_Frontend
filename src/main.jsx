import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/global.css"
import { SignIn } from './pages/SignIn.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
)
