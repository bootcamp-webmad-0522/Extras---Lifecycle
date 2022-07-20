import './App.css';
import { useState } from 'react'
import Timer from './components/Timer/Timer'

function App() {

  const [show, setShow] = useState(true)

  return (
    <main className='App'>

      <h3>Listado de apartamentos</h3>

      <hr />

      <button onClick={() => setShow(!show)}> {show ? "Ocultar!" : "Mostrar!"} el contador manual y automático</button>

      <h3>Contador automático (usa useEffect)</h3>
      {show && <Timer />}



    </main>
  );
}

export default App;
