import { Fragment } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import { useState } from 'react';

function App() {
  // Definir el state
  // cantidad tendrá el valor que sea el state
  // guardarCantidad es la función para guardar o modificar el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);

  return (
    <Fragment>
      <Header titulo="Cotizador de Préstamos" />
      <div className="container">
        <Formulario
          cantidad={cantidad}
          guardarCantidad={guardarCantidad}
          plazo={plazo}
          guardarPlazo={guardarPlazo}
          total={guardarTotal}
          guardarTotal={guardarTotal}
        />
        <p>Total a pagar: $ {total}</p>
      </div>
    </Fragment>
  );
}

export default App;
