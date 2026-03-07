import InputField from "./InputField";
import PasswordField from "./PasswordField";

export default function RegisterCard() {
  return (
    <div className="card">
      <div className="title">
        <h1>Crear cuenta</h1>
        <p>Únete a nuestra comunidad de cocina y guarda tus platos favoritos</p>
      </div>

      <form>
        <InputField
          label="Nombre completo"
          icon="person"
          type="text"
          placeholder="Tu nombre y apellidos"
        />

        <InputField
          label="Correo electrónico"
          icon="mail"
          type="email"
          placeholder="ejemplo@correo.com"
        />

        <PasswordField />

        <div className="terms">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            Acepto los <a href="#">términos y condiciones</a>
          </label>
        </div>

        <button className="btn">Crear cuenta</button>
      </form>

      <div className="login">
        <p>
          ¿Ya tienes cuenta? <a href="/login">Iniciar sesión</a>
        </p>
      </div>
    </div>
  );
}
