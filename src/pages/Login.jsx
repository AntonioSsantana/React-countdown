import { Link } from "react-router-dom";

function Login() {
  return (
    <main>
      <article>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="text"
              name="email-input"
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              name="password-input"
            />
          </label>
          <button
            type="button"
            name="login-button"
          >
            Login
          </button>
          <Link
            to="/register"
          >
            Registrar
          </Link>
        </form>
      </article>
    </main>
  );
}

export default Login;