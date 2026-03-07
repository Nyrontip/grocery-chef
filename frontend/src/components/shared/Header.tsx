import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <span className="material-symbols-outlined">restaurant_menu</span>
          <h2>Mis Recetas</h2>
        </div>

        <nav className={styles.nav}>
          <a href="#">Dashboard</a>

          <a href="#">
            <span className="material-symbols-outlined">shopping_cart</span>
            Lista de Compras
          </a>
        </nav>

        <div className={styles.headerActions}>
          <button className={styles.btnPrimary}>Crear receta</button>

          <div className={styles.avatar}></div>
        </div>
      </div>
    </header>
  );
}
