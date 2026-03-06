export default function BasicInfoCard() {
  return (
    <section className="card">
      <h2 className="section-title">
        <span className="material-symbols-outlined icon-green">info</span>
        Información Básica
      </h2>

      <label>
        Título de la receta
        <input type="text" placeholder="Ej. Lasaña de Berenjena de la Abuela" />
      </label>

      <label>
        Descripción corta
        <textarea
          rows={3}
          placeholder="Cuéntanos qué hace especial a este plato..."
        ></textarea>
      </label>
    </section>
  );
}
