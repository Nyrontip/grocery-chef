type NavbarProps = {
  onClose?: () => void;
};

export default function Navbar({ onClose }: NavbarProps) {
  return (
    <header className="navbar">
      <div className="logo">
        <span className="material-symbols-outlined icon-green">
          restaurant_menu
        </span>
        <h2>Cocinero Pro</h2>
      </div>

      <button className="icon-btn" onClick={onClose}>
        <span className="material-symbols-outlined">close</span>
      </button>
    </header>
  );
}
