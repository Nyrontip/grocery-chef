export default function ShoppingTableCard() {
  return (
    <section className="card">
      <div className="card-header">
        <h2>Resultado de la Lista</h2>
        <p>Ingredientes consolidados de las recetas seleccionadas.</p>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Cantidad</th>
              <th>Unidad</th>
              <th>Categoría</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Papas</td>
              <td>1.5</td>
              <td>kg</td>
              <td>Frescos</td>
            </tr>

            <tr>
              <td>Ajo</td>
              <td>4</td>
              <td>dientes</td>
              <td>Frescos</td>
            </tr>

            <tr>
              <td>Pechuga de Pollo</td>
              <td>800</td>
              <td>gr</td>
              <td>Proteína</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
