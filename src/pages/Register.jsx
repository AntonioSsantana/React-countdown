import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
    
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
          <button
            type="button"
            name="register-button"
          >
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