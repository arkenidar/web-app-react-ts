import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Colors from './Colors.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Colors />
  </StrictMode>,
)
