import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const reactElement=React.createElement(
  'a',
  {
    href:'http://goggle.com',
    target:'_blank'

  },
  'click to visit goggle'
)

createRoot(document.getElementById('root')).render(
reactElement
    // <App />

)
