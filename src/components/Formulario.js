import { useState, Fragment } from 'react';
import { calcularTotal } from '../helpers';

const Formulario = props => {
  const {
    cantidad,
    guardarCantidad,
    plazo,
    guardarPlazo,
    total,
    guardarTotal,
  } = props;
  // definir state para mensaje de error
  // cuando incia estará en false
  const [error, guardarError] = useState(false);

  // Cuando el usuario hace submit
  const calcularPrestamo = e => {
    e.preventDefault();
    // validar
    if (cantidad === 0 || plazo === '') {
      guardarError(true);
      return;
    } else {
      // eliminar error
      guardarError(false);
    }

    // realizar la cotización
    const total = calcularTotal(cantidad, plazo);
    // una vez calculado, guardarTotal
    guardarTotal(total);
  };
  return (
    <Fragment>
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
        {error ? (
          <p className="error">Todos los campos son obligatorios</p>
        ) : null}
      </form>
    </Fragment>
  );
};

export default Formulario;
