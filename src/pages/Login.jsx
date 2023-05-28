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

  const onChangeFunc = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'email-input':
        setCredentials({
          ...userCredentials,
          email: value
        })
        break;
      case 'password-input':
        setCredentials({
          ...userCredentials,
          password: value
        });
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <article>
        <form>
          <label htmlFor="email-input">
            Email
            <input
              type="text"
              name="email-input"
              onChange={onChangeFunc}
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              name="password-input"
              onChange={onChangeFunc}
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