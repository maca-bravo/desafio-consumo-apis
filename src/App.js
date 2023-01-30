import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componentes/Header.jsx';
import MiApi from './componentes/MiApi.jsx';
import { useState } from 'react';

function App() {
  const [valorBusqueda, setValorBusqueda] = useState('');

  return (
    <div className="App">
      <Header setValorBusqueda={setValorBusqueda} ></Header>
      <MiApi valorBusqueda={valorBusqueda}></MiApi>
      
    </div>
  );
}

export default App;
