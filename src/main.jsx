import React from 'react'
import ReactDOM from 'react-dom/client'
import PlusButton from './PlusButton.jsx'
import MinusButton from './MinusButton.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlusButton />
    <MinusButton />
  </React.StrictMode>
)
