"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/dashboard");
  };

  return (
    <header className="navbar">
      <button 
        className="icon-btn back-btn"
        onClick={handleBack}
        type="button"
      >
        <span className="material-symbols-outlined">arrow_back</span>
      </button>
    </header>
  );
}
