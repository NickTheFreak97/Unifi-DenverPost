import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ScreenWidthProvider } from './Context/Screen Size/UseScreenWidth.tsx'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ScreenWidthProvider>
        <App />
    </ScreenWidthProvider>
  </StrictMode>,
)
