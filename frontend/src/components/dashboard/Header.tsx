export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="material-symbols-outlined icon">restaurant_menu</span>
        <h2>Mis Recetas</h2>
      </div>

      <nav className="nav">
        <a href="#">Dashboard</a>

        <a href="#" className="cart">
          <span className="material-symbols-outlined">shopping_cart</span>
          Lista de Compras
        </a>
      </nav>

      <div className="header-actions">
        <input type="text" placeholder="Buscar recetas..." className="search" />

        <button className="btn-primary">Crear receta</button>

        <div className="avatar"></div>
      </div>
    </header>
  );
}
