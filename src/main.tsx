import React from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './components/Hello'

const rootEl = document.getElementById('root')
if (rootEl) {
  createRoot(rootEl).render(
    <React.StrictMode>
      <Hello />
    </React.StrictMode>
  )
}
