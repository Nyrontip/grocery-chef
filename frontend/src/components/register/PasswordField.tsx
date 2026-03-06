"use client";

import { useState } from "react";

export default function PasswordField() {
  const [show, setShow] = useState(false);

  return (
    <div className="input-group">
      <label>Contraseña</label>

      <div className="input-container">
        <span className="material-symbols-outlined">lock</span>

        <input
          type={show ? "text" : "password"}
          placeholder="Min. 8 caracteres"
        />

        <button type="button" className="eye" onClick={() => setShow(!show)}>
          <span className="material-symbols-outlined">
            {show ? "visibility_off" : "visibility"}
          </span>
        </button>
      </div>
    </div>
  );
}
