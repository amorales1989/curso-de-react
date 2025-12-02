import { useCart } from '../context/CartContext.jsx'
import CartItem from './CartItem.jsx'
import { Link } from 'react-router-dom'

function Cart() {
  const { cart, getTotalPrice, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>El carrito está vacío</h2>
        <p>
          <Link to="/">Volver al catálogo</Link>
        </p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h2>Tu carrito</h2>
      <div style={{ marginTop: '1rem', border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden' }}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Total: ${getTotalPrice()}</h3>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={clearCart} style={{ padding: '0.5rem 1rem' }}>Vaciar carrito</button>
          <Link to="/checkout"><button style={{ padding: '0.5rem 1rem', background: '#646cff', color: 'white', border: 'none', borderRadius: '6px' }}>Finalizar compra</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Cart
