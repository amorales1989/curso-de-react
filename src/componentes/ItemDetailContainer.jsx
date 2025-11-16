import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';
import { getProductById } from '../data/products.js';

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    getProductById(id)
      .then((data) => {
        setProducto(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem'
      }}>
        Cargando producto...
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem',
        color: 'red'
      }}>
        {error}
      </div>
    );
  }

  if (!producto) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem'
      }}>
        Producto no encontrado
      </div>
    );
  }

  return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;

