import { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [cantidad, setCantidad] = useState(initial);

  const incrementar = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const decrementar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(cantidad);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center',
      marginTop: '1rem'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <button
          onClick={decrementar}
          disabled={cantidad <= 1}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: cantidad <= 1 ? '#ccc' : '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: cantidad <= 1 ? 'not-allowed' : 'pointer',
            fontSize: '1.2rem'
          }}
        >
          -
        </button>
        <span style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          minWidth: '50px',
          textAlign: 'center'
        }}>
          {cantidad}
        </span>
        <button
          onClick={incrementar}
          disabled={cantidad >= stock}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: cantidad >= stock ? '#ccc' : '#646cff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: cantidad >= stock ? 'not-allowed' : 'pointer',
            fontSize: '1.2rem'
          }}
        >
          +
        </button>
      </div>
      <button
        onClick={handleAddToCart}
        style={{
          padding: '0.75rem 2rem',
          backgroundColor: '#badeb5ff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          fontWeight: 'bold'
        }}
      >
        Agregar al carrito
      </button>
      <p style={{ color: '#666', fontSize: '0.9rem' }}>
        Stock disponible: {stock}
      </p>
    </div>
  );
}

export default ItemCount;

