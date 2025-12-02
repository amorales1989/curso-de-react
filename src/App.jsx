import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './componentes/Navbar.jsx'
import ItemListContainer from './componentes/ItemListContainer.jsx'
import ItemDetailContainer from './componentes/ItemDetailContainer.jsx'
import Cart from './componentes/Cart.jsx'
import CheckoutForm from './componentes/CheckoutForm.jsx'

function NotFound() {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#333' }}>404</h1>
      <p style={{ fontSize: '1.5rem', color: '#666' }}>
        Página no encontrada
      </p>
      <Link 
        to="/" 
        style={{
          color: '#646cff',
          textDecoration: 'none',
          fontSize: '1.2rem'
        }}
      >
        Volver al inicio
      </Link>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App