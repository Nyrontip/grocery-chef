export default function StepsCard() {
  return (
    <section className="card">
      <h2 className="section-title">
        <span className="material-symbols-outlined icon-green">
          format_list_numbered
        </span>
        Pasos de Preparación
      </h2>

      <label>
        Instrucciones detalladas
        <textarea rows={8}></textarea>
      </label>

      <p className="tip">
        Protip: Describe cada paso de forma clara y menciona los tiempos de
        cocción.
      </p>
    </section>
  );
}
