import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppRouter from '../routes/router'
import '../styles/global.scss'

import Header from '../core/components/header/header'
import Footer from '../core/components/footer/footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='wrapper'>
      <Header />
      <AppRouter />
      <Footer />
    </div>
  </StrictMode>,
)
