"use client";

import InputField from "./InputField";
import PasswordField from "./PasswordField";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { register } from "@/services/auth";

export default function RegisterCard() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!acceptedTerms) {
      setError("Debes aceptar los términos y condiciones");
      return;
    }

    setLoading(true);

    try {
      const result = await register(name, email, password);
      localStorage.setItem("token", result.token);
      localStorage.setItem("user", JSON.stringify(result.user));
      router.push("/dashboard");
    } catch (err: any) {
      setError(err?.message ?? "Error al crear la cuenta");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      <div className="title">
        <h1>Crear cuenta</h1>
        <p>Únete a nuestra comunidad de cocina y guarda tus platos favoritos</p>
      </div>

      <form onSubmit={handleSubmit}>
        <InputField
          label="Nombre completo"
          icon="person"
          type="text"
          placeholder="Tu nombre y apellidos"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <InputField
          label="Correo electrónico"
          icon="mail"
          type="email"
          placeholder="ejemplo@correo.com"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordField
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="terms">
          <input
            type="checkbox"
            id="terms"
            checked={acceptedTerms}
            onChange={(e) => setAcceptedTerms(e.target.checked)}
          />
          <label htmlFor="terms">
            Acepto los <a href="#">términos y condiciones</a>
          </label>
        </div>

        {error && <p className="error-text">{error}</p>}

        <button className="btn" disabled={loading}>
          Crear cuenta
        </button>
      </form>

      <div className="login">
        <p>
          ¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a>
        </p>
      </div>
    </div>
  );
}
