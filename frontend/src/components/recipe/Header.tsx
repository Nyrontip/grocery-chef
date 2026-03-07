export default function Header() {
  return (
    <header className="header">
      <a className="back-btn" href="#">
        <span className="arrow">←</span>
        <span>Volver</span>
      </a>

      <div className="header-buttons">
        <button className="icon-btn">
          <span className="material-symbols-outlined">star</span>
        </button>

        <button className="icon-btn delete">
          <span className="material-symbols-outlined">delete</span>
        </button>

        <button className="edit-btn">Edit Recipe</button>
      </div>
    </header>
  );
}
