import { useState } from 'react';

const Formulario = ({ cantidad, guardarCantidad, plazo, guardarPlazo }) => {
  // definir state para mensaje de error
  // cuando incia estará en false
  const [error, guardarError] = useState(false);

  // Cuando el usuario hace submit
  const calcularPrestamo = e => {
    e.preventDefault();
    // validar
    if(cantidad === 0 || plazo === '') {
      guardarError(true);
    }
    // realizar la cotización
    console.log('Enviando formulario...');
  }
  return (
    <form onSubmit={calcularPrestamo}>
      <div className="row">
        <div>
          <label>Cantidad Prestamo</label>
          <input
            className="u-full-width"
            type="number"
            placeholder="Ejemplo: 3000"
            onChange={e => guardarCantidad(+e.target.value)}
          />
        </div>
        <div>
          <label>Plazo para Pagar</label>
          <select
            className="u-full-width"
            onChange={e => guardarPlazo(+e.target.value)}
          >
            <option value="">Seleccionar</option>
            <option value="3">3 meses</option>
            <option value="6">6 meses</option>
            <option value="12">12 meses</option>
            <option value="24">24 meses</option>
          </select>
        </div>
        <div>
          <input
            type="submit"
            value="Calcular"
            className="button-primary u-full-width"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
