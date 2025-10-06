function Navbar() {
  return (
    <nav style={{
      padding: '1rem 2rem',
      backgroundColor: '#333',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'top'
    }}>
      <h2>Mi Tienda</h2>
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        margin: 0
      }}>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Productos</a></li>
        <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar