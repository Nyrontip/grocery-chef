import InputField from "./InputField";
import ErrorBox from "./ErrorBox";

export default function LoginCard() {
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
        <form>
          <InputField
            label="Correo electrónico"
            type="email"
            placeholder="ejemplo@correo.com"
            icon="mail"
          />

          <div className="form-group">
            <div className="label-row">
              <label>Contraseña</label>
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>

            <InputField type="password" placeholder="••••••••" icon="lock" />
          </div>

          <ErrorBox message="Correo o contraseña incorrectos" />

          <button className="login-btn">
            <span>Iniciar sesión</span>
            <span className="material-symbols-outlined">login</span>
          </button>
        </form>

        <div className="register">
          <p>
            ¿No tienes cuenta?
            <a href="#">Registrarse</a>
          </p>
        </div>
      </div>
    </div>
  );
}
