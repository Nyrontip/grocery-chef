type StepsCardProps = {
  steps: string[];
};

export default function StepsCard({ steps }: StepsCardProps) {
  return (
    <div className="steps-card">
      <h3>Preparation Steps</h3>
      <p>
        {steps.map((step, i) => (
          <span key={i}>
            {i + 1}. {step}
            <br />
            <br />
          </span>
        ))}
      </p>
    </div>
  );
}
