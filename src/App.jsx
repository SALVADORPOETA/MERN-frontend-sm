import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  // Estilo base para los links de navegación para asegurar contraste 100%
  const linkStyle = {
    color: '#FFFFFF', // Blanco puro
    textDecoration: 'none',
    padding: '8px 20px', // Un poco más de área de clic (Touch target)
    fontSize: '16px',
    fontWeight: '500',
    borderRadius: '4px',
    transition: 'background 0.3s',
  }
  return (
    <Router>
      <nav
        style={{
          padding: '10px 20px',
          backgroundColor: '#000000',
          color: '#FFFFFF',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          boxSizing: 'border-box',
          zIndex: 1000,
          borderBottom: '1px solid #333',
        }}
      >
        <span style={{ marginRight: '10px' }}>
          <Link
            to="/"
            style={{
              ...linkStyle,
              color: '#00d1b2',
              fontWeight: 'bold',
              fontSize: '20px',
            }}
          >
            MERN
          </Link>
        </span>
        <Link to="/" style={linkStyle}>
          Inicio
        </Link>
        <Link to="/about" style={linkStyle}>
          Acerca de
        </Link>
      </nav>
      <div
        style={{
          paddingTop: '80px',
          maxWidth: '1400px',
          margin: '0 auto',
          paddingLeft: '20px',
          paddingRight: '20px',
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
