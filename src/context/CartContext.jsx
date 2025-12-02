import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])

  const addItem = (producto, cantidad) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === producto.id)
      if (existing) {
        return prev.map((p) => p.id === producto.id ? { ...p, cantidad: Math.min(p.cantidad + cantidad, producto.stock) } : p)
      }
      return [...prev, { ...producto, cantidad }]
    })
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  const clearCart = () => setCart([])

  const getTotalQuantity = () => cart.reduce((acc, item) => acc + item.cantidad, 0)

  const getTotalPrice = () => cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalQuantity, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
