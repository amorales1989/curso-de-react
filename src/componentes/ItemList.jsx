import Item from './Item.jsx';

function ItemList({ productos }) {
  return (
    <div style={{
      padding: '2rem',
      display: 'flex',
      gap: '2rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}>
      {productos.map((producto) => (
        <Item key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemList;

