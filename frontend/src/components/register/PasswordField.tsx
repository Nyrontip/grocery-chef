"use client";

import { useState } from "react";

type Props = {
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

export default function PasswordField({ name, value, onChange }: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="input-group">
      <label>Contraseña</label>

      <div className="input-container">
        <span className="material-symbols-outlined">lock</span>

        <input
          name={name}
          type={show ? "text" : "password"}
          placeholder="Min. 8 caracteres"
          value={value}
          onChange={onChange}
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
