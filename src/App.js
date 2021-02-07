import { Fragment } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import { useState } from 'react';
import Mensaje from './components/Mensaje';
import Resultado from './components/Resultado';

function App() {
  // Definir el state
  // cantidad tendrá el valor que sea el state
  // guardarCantidad es la función para guardar o modificar el state
  const [cantidad, guardarCantidad] = useState(0);
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);

  let componente;
  if (total === 0) {
    componente = <Mensaje />;
  } else {
    componente = <Resultado total={total} plazo={plazo} cantidad={cantidad} />;
  }

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
        <div className="mensajes">{componente}</div>
      </div>
    </Fragment>
  );
}

export default App;
