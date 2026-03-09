import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  return (
    <Router>
      <nav
        style={{
          padding: '10px 20px',
          backgroundColor: '#282c34',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <span style={{ padding: '5px 20px' }}>
          <Link to="/">
            <strong>MERN</strong>
          </Link>
        </span>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          Inicio
        </Link>
        <Link
          to="/about"
          style={{
            color: 'white',
            textDecoration: 'none',
            padding: '5px',
            paddingLeft: '20px',
            paddingRight: '20px',
          }}
        >
          Acerca de
        </Link>
      </nav>
      <div style={{ paddingTop: '80px', maxWidth: '1400px', margin: '0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
