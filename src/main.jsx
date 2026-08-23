import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './portfolio-v2.css'
import App from './PortfolioV2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
