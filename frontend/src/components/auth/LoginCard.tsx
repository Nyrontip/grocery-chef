"use client";
import InputField from "./InputField";
import ErrorBox from "./ErrorBox";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/services/auth";

export default function LoginCard() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const result = await login(email, password);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message ?? "Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <div className="header">
        <div className="icon-circle">
          <span className="material-symbols-outlined icon-main">
            restaurant_menu
          </span>
        </div>

        <h1>Mis Recetas</h1>
        <p>Ingresa a tu cuenta para cocinar</p>
      </div>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <InputField
            label="Correo electrónico"
            name="email"
            type="email"
            placeholder="ejemplo@correo.com"
            icon="mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="form-group">
            <div className="label-row">
              <label>Contraseña</label>
            </div>

            <InputField
              name="password"
              type="password"
              placeholder="••••••••"
              icon="lock"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <ErrorBox message={error} />}

          <button className="login-btn" disabled={loading}>
            <span>Iniciar sesión</span>
            <span className="material-symbols-outlined">login</span>
          </button>
        </form>

        <div className="register">
          <p>
            ¿No tienes cuenta?
            <a href="/register">Registrarse</a>
          </p>
        </div>
      </div>
    </div>
  );
}
