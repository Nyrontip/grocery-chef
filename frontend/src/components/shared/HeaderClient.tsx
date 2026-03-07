"use client";

import styles from "./Header.module.css";
import { useEffect, useState } from "react";

export default function HeaderClient() {
  const [userInitials, setUserInitials] = useState("");

  useEffect(() => {
    const getInitials = () => {
      if (typeof window === "undefined") return "";
      const userStr = localStorage.getItem("user");
      if (userStr) {
        try {
          const user = JSON.parse(userStr);
          const userName = user.name || "Usuario";
          return userName
            .toUpperCase()
            .slice(0, 2);
        } catch (error) {
          return "U";
        }
      }
      return "";
    };

    setUserInitials(getInitials());
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <div className={styles.logo}>
          <span className="material-symbols-outlined">restaurant_menu</span>
          <h2>Mis Recetas</h2>
        </div>

        <nav className={styles.nav}>
          <a href="/dashboard">Dashboard</a>

          <a href="/shopping-list">
            <span className="material-symbols-outlined">shopping_cart</span>
            Lista de Compras
          </a>
        </nav>

        <div className={styles.headerActions}>
          <a href="/recipes/new" className={styles.btnPrimary}>Crear receta</a>

          <div className={styles.avatar}>{userInitials}</div>
        </div>
      </div>
    </header>
  );
}
