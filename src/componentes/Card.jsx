function Card({ titulo, imagen, precio }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '1rem',
      width: '250px',
      textAlign: 'center',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <img 
        src={imagen} 
        alt={titulo}
        style={{
          width: '100%',
          height: '200px',
          objectFit: 'cover',
          borderRadius: '4px'
        }}
      />
      <h3>{titulo}</h3>
      <p style={{ 
        fontSize: '1.5rem', 
        color: '#badeb5ff',
        fontWeight: 'bold'
      }}>
        ${precio}
      </p>
      <button style={{
        padding: '0.5rem 1.5rem',
        backgroundColor: '#646cff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
        Agregar al carrito
      </button>
    </div>
  )
}

export default Card