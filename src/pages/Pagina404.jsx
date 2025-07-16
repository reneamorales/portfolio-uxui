import React from 'react'
import { Link } from 'react-router-dom'

const Pagina404 = () => {
  return (
    <div style={{
      minHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '5rem', margin: 0 }}>404</h1>
      <h2>Página no encontrada</h2>
      <br />
      <p>Lo sentimos, la página que buscas no existe o ha sido movida.</p>
      <Link to="/" style={{
        marginTop: '2rem',
        padding: '0.75rem 2rem',
        background: '#007bff',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Volver al inicio
      </Link>
    </div>
  )
}

export default Pagina404