
import './App.css'
import Navbar from './componentes/Navbar'
import Card from './componentes/Card'

function App() {
  return (
    <>
      <Navbar />
      
      <div style={{
        padding: '2rem',
        display: 'flex',
        gap: '2rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Card 
          titulo="Colchon 1 plaza"
          imagen="/ensueño.png"
          precio={25300}
        />
        <Card 
          titulo="Detergente en gel"
          imagen="/detergente.jpg"
          precio={1200}
        />
        <Card 
          titulo="Pointura asfaltica"
          imagen="indulacpaint2.svg"
          precio={5900}
        />
      </div>
    </>
  )
}

export default App