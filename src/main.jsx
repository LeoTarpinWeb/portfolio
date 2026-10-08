import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import QRCodeGenerator from 'qrcode-generator'
import './recovered.css'

function RecoveredPortfolio() {
  useEffect(() => {
    // The Netlify deployment contains the original compiled runtime. We keep it
    // intact so the recovered project behaves like the deployed portfolio.
    window.qrcode = QRCodeGenerator

    const script = document.createElement('script')
    script.src = '/assets/recovered-runtime.js'
    script.async = false
    document.body.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return <div id="app" />
}

createRoot(document.getElementById('root')).render(<RecoveredPortfolio />)
