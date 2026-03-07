type Props = {
  value: "all" | "favorites";
  onChange: (value: "all" | "favorites") => void;
};

export default function Tabs({ value, onChange }: Props) {
  return (
    <div className="tabs">
      <button
        type="button"
        className={`tab ${value === "all" ? "active" : ""}`}
        onClick={() => onChange("all")}
      >
        <span className="material-symbols-outlined">grid_view</span>
        Todas
      </button>

      <button
        type="button"
        className={`tab ${value === "favorites" ? "active" : ""}`}
        onClick={() => onChange("favorites")}
      >
        <span className="material-symbols-outlined">star</span>
        Favoritas
      </button>
    </div>
  );
}
