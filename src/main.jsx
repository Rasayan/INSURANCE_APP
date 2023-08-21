import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Homepage from './Homepage.jsx'
import About from './About.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('navbar')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('homepage')).render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('about')).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('footer')).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>,
)
