"use client";

import { useRouter } from "next/navigation";
import styles from "./Navbar.module.css";

type NavbarProps = {
  onClose?: () => void; // Muestra botón de cerrar si se pasa
  showBack?: boolean; // Muestra botón de volver si true
};

export default function Navbar({ onClose, showBack }: NavbarProps) {
  const router = useRouter();

  const handleBack = () => {
    router.push("/dashboard");
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <span className={`material-symbols-outlined ${styles.iconGreen}`}>
          restaurant_menu
        </span>
        <h2>Cocinero Pro</h2>
      </div>

      <div className={styles.navbarActions}>
        {showBack && (
          <button
            className={`${styles.iconBtn} ${styles.backBtn}`}
            onClick={handleBack}
            type="button"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        )}

        {onClose && (
          <button className={styles.iconBtn} onClick={onClose} type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </div>
    </header>
  );
}
