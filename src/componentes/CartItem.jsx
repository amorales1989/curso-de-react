import { useCart } from '../context/CartContext.jsx'

function CartItem({ item }) {
  const { removeItem } = useCart()

  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #eee' }}>
      <img src={item.imagen} alt={item.titulo} style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '6px' }} />
      <div style={{ flex: 1 }}>
        <h4 style={{ margin: 0 }}>{item.titulo}</h4>
        <p style={{ margin: 0, color: '#666' }}>Precio: ${item.precio} x {item.cantidad}</p>
        <p style={{ margin: 0, fontWeight: 'bold' }}>Subtotal: ${item.precio * item.cantidad}</p>
      </div>
      <div>
        <button onClick={() => removeItem(item.id)} style={{ padding: '0.5rem 1rem', background: '#ff6b6b', color: 'white', border: 'none', borderRadius: '6px' }}>Eliminar</button>
      </div>
    </div>
  )
}

export default CartItem
