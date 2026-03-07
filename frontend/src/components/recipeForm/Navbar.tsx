"use client";

import { useRouter } from "next/navigation";

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
    <header className="navbar">
      <div className="logo">
        <span className="material-symbols-outlined icon-green">
          restaurant_menu
        </span>
        <h2>Cocinero Pro</h2>
      </div>

      <div className="navbar-actions">
        {showBack && (
          <button
            className="icon-btn back-btn"
            onClick={handleBack}
            type="button"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        )}

        {onClose && (
          <button className="icon-btn" onClick={onClose} type="button">
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
      </div>
    </header>
  );
}
