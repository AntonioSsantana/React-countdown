import { Link } from "react-router-dom";

function Register() {
  return (
    <main>
      <article>
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              name="name-input"
            />
          </label>
          <label htmlFor="email-input">
            Email
            <input
              type="text"
              name="email-input"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password-input"
            />
          </label>
          <button>
            Registrar
          </button>
          <Link
            to="/login"
          >
            Login
          </Link>
        </form>
      </article>
    </main>
  );
}

export default Register;