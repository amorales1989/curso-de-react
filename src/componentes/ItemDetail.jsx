import ItemCount from './ItemCount.jsx';

function ItemDetail({ producto }) {
  const handleAddToCart = (cantidad) => {
    alert(`Se agregaron ${cantidad} unidad(es) de ${producto.titulo} al carrito`);
  };

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
        <ItemCount 
          stock={producto.stock} 
          onAdd={handleAddToCart}
        />
      </div>
    </div>
  );
}

export default ItemDetail;

