import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList.jsx';
import { getProducts } from '../data/products.js';

function ItemListContainer() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProducts(categoria)
      .then((data) => {
        setProductos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
        setLoading(false);
      });
  }, [categoria]);

  if (loading) {
    return (
      <div style={{
        padding: '2rem',
        textAlign: 'center',
        fontSize: '1.5rem'
      }}>
        Cargando productos...
      </div>
    );
  }

  return (
    <div>
      <h2 style={{
        padding: '2rem 2rem 0',
        textAlign: 'center',
        fontSize: '2rem',
        color: '#333'
      }}>
        {categoria 
          ? `Productos de categoría: ${categoria}` 
          : 'Todos los productos'}
      </h2>
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <div style={{
          padding: '2rem',
          textAlign: 'center',
          fontSize: '1.2rem',
          color: '#666'
        }}>
          No se encontraron productos en esta categoría.
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;

