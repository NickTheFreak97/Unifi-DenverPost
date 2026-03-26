import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ScreenWidthProvider } from './Context/Screen Size/UseScreenWidth.tsx'
import { ThemeContextProvider } from './components/theme/theme.tsx'

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <ScreenWidthProvider>
          <App />
      </ScreenWidthProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
