import { useState } from 'react'
import ItemCount from './ItemCount.jsx';
import { useCart } from '../context/CartContext.jsx'
import { Link } from 'react-router-dom'

function ItemDetail({ producto }) {
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = (cantidad) => {
    addItem(producto, cantidad)
    setAdded(true)
  }

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap'
    }}>
      <div style={{
        flex: '1',
        minWidth: '300px'
      }}>
        <img 
          src={producto.imagen} 
          alt={producto.titulo}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
          }}
        />
      </div>
      <div style={{
        flex: '1',
        minWidth: '300px'
      }}>
        <h1 style={{
          fontSize: '2rem',
          marginBottom: '1rem',
          color: '#333'
        }}>
          {producto.titulo}
        </h1>
        <p style={{
          fontSize: '2.5rem',
          color: '#badeb5ff',
          fontWeight: 'bold',
          marginBottom: '1rem'
        }}>
          ${producto.precio}
        </p>
        <p style={{
          fontSize: '1.1rem',
          color: '#666',
          lineHeight: '1.6',
          marginBottom: '2rem'
        }}>
          {producto.descripcion}
        </p>

        {!added ? (
          <ItemCount 
            stock={producto.stock} 
            onAdd={handleAddToCart}
          />
        ) : (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/cart"><button style={{ padding: '0.5rem 1rem', background: '#646cff', color: 'white', border: 'none', borderRadius: '6px' }}>Ir al carrito</button></Link>
            <Link to="/"><button style={{ padding: '0.5rem 1rem' }}>Seguir comprando</button></Link>
          </div>
        )}

      </div>
    </div>
  );
}

export default ItemDetail;

