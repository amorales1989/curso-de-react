import { Link } from 'react-router-dom';

function Item({ producto }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      cursor: 'pointer'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <Link to={`/item/${producto.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img 
          src={producto.imagen} 
          alt={producto.titulo}
          style={{
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '4px'
          }}
        />
        <h3>{producto.titulo}</h3>
        <p style={{ 
          fontSize: '1.5rem', 
          color: '#badeb5ff',
          fontWeight: 'bold'
        }}>
          ${producto.precio}
        </p>
        <button style={{
          padding: '0.5rem 1.5rem',
          backgroundColor: '#646cff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
          Ver detalle
        </button>
      </Link>
    </div>
  );
}

export default Item;

