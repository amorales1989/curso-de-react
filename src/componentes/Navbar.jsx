import { Link } from 'react-router-dom';

function Navbar() {
  const categorias = [
    { nombre: 'Todos', path: '/' },
    { nombre: 'Hogar', path: '/categoria/hogar' },
    { nombre: 'Limpieza', path: '/categoria/limpieza' },
    { nombre: 'Construcción', path: '/categoria/construccion' }
  ];

  return (
    <nav style={{
      padding: '1rem 2rem',
      backgroundColor: '#333',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h2 style={{ margin: 0 }}>Mi Tienda</h2>
      </Link>
      <ul style={{
        display: 'flex',
        gap: '2rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        flexWrap: 'wrap'
      }}>
        {categorias.map((categoria) => (
          <li key={categoria.path}>
            <Link 
              to={categoria.path} 
              style={{ 
                color: 'white', 
                textDecoration: 'none',
                transition: 'opacity 0.2s'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.7'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              {categoria.nombre}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar