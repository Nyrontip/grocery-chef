type Props = {
  initialTitle?: string;
  initialDescription?: string;
};

export default function BasicInfoCard({
  initialTitle = "",
  initialDescription = "",
}: Props) {
  return (
    <section className="card">
      <h2 className="section-title">
        <span className="material-symbols-outlined icon-green">info</span>
        Información Básica
      </h2>

      <label>
        Título de la receta
        <input type="text" defaultValue={initialTitle} />
      </label>

      <label>
        Descripción corta
        <textarea rows={3} defaultValue={initialDescription}></textarea>
      </label>
    </section>
  );
}
