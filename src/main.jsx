import React from 'react'
import ReactDOM from 'react-dom/client'
import { SignIn } from './pages/SignIn.jsx'
import "./styles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
)
