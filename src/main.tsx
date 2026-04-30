import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ScreenWidthProvider } from './Context/Screen Size/UseScreenWidth.tsx'
import { ThemeContextProvider } from './components/theme/theme.tsx'

import './index.css'
import App from './App.tsx'
import LoremIpsumContextProvider from './Context/Placeholder/UseLoremIpsum.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <ScreenWidthProvider>
        <LoremIpsumContextProvider minWords={9} maxWords={16}>
          <App />
        </LoremIpsumContextProvider>
      </ScreenWidthProvider>
    </ThemeContextProvider>
  </StrictMode>,
)
