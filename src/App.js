import { Fragment } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';

function App() {
  return (
    <Fragment>
      <Header titulo="Cotizador de Préstamos" />
      <div className="container">
        <Formulario />
      </div>
    </Fragment>
  );
}

export default App;
