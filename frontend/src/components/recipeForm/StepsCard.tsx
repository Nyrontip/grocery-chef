type Props = {
  steps?: string;
  onStepsChange?: (value: string) => void;
};

export default function StepsCard({ steps = "", onStepsChange }: Props) {
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
        <textarea 
          rows={8} 
          value={steps}
          onChange={(e) => onStepsChange?.(e.target.value)}
          required
        ></textarea>
      </label>

      <p className="tip">
        Protip: Describe cada paso de forma clara y menciona los tiempos de
        cocción.
      </p>
    </section>
  );
}
