import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  
  const [userCredentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [loginFail, setLoginFail] = useState(false);
  
  useEffect(() => {
    try {
      const userRegistered = JSON.parse(localStorage.getItem('user_registered'));
      const { email, password } = userRegistered;
      console.log(email, password)
    } catch (error) {
      console.log(error);
    }
  }, [])

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