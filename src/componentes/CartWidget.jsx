import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'

function CartWidget() {
  const { getTotalQuantity } = useCart()
  const total = getTotalQuantity()

  return (
    <Link to="/cart" style={{ textDecoration: 'none', color: 'white' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <span style={{ fontSize: '20px' }}>🛒</span>
        <span style={{ fontWeight: 'bold' }}>{total}</span>
      </div>
    </Link>
  )
}

export default CartWidget
