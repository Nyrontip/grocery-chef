type StepsCardProps = {
  steps: string[];
};

export default function StepsCard({ steps }: StepsCardProps) {
  return (
    <div className="steps-card">
      <h3 className="section-title">
        <span className="material-symbols-outlined section-icon">set_meal</span>
        Preparation Steps
      </h3>

      <div className="steps-list">
        {steps.map((step, i) => (
          <div key={i} className="step-item">
            <span className="step-number">{i + 1}</span>
            <p className="step-text">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
