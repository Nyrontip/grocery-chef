type StatsCardProps = {
  time: string;
  calories: string;
  serves: string;
};

export default function StatsCard({ time, calories, serves }: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="stat">
        <span className="material-symbols-outlined icon">schedule</span>
        <p className="label">Time</p>
        <p className="value">{time}</p>
      </div>

      <div className="divider"></div>

      <div className="stat">
        <span className="material-symbols-outlined icon">
          local_fire_department
        </span>
        <p className="label">Calories</p>
        <p className="value">{calories}</p>
      </div>

      <div className="divider"></div>

      <div className="stat">
        <span className="material-symbols-outlined icon">group</span>
        <p className="label">Serves</p>
        <p className="value">{serves}</p>
      </div>
    </div>
  );
}
