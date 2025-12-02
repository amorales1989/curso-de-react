import { useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { createOrderInFirestore } from '../services/firebase.js'

function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useCart()
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [telefono, setTelefono] = useState('')
  const [loading, setLoading] = useState(false)
  const [orderId, setOrderId] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (cart.length === 0) return
    setLoading(true)
    setError(null)
    try {
      const order = {
        buyer: { nombre, email, telefono },
        items: cart.map(({ id, titulo, precio, cantidad }) => ({ id, titulo, precio, cantidad })),
        total: getTotalPrice()
      }
      const id = await createOrderInFirestore(order)
      setOrderId(id)
      clearCart()
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (orderId) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>Gracias por tu compra</h2>
        <p>Tu orden fue generada con id:</p>
        <p style={{ fontWeight: 'bold' }}>{orderId}</p>
      </div>
    )
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h2>Checkout</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <input required placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input required placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        <p>Total a pagar: ${getTotalPrice()}</p>
        <button disabled={loading} style={{ padding: '0.5rem 1rem', background: '#646cff', color: 'white', border: 'none', borderRadius: '6px' }}>
          {loading ? 'Procesando...' : 'Confirmar compra'}
        </button>
      </form>
    </div>
  )
}

export default CheckoutForm
