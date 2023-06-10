import { useState } from "react";
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
        });
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

  const onClickFunc = ({ target }) => {
    const { name } = target;

    switch (name) {
      case 'login-button':
        try {
          const { name, email, password } = JSON.parse(localStorage.getItem('user_registered'));

          if (email === userCredentials.email && password === userCredentials.password) {
            localStorage.setItem('sing_up_user', JSON.stringify({
              name,
              email,
              password,
            }));

            navigate('/home');
          }

          return setLoginFail(true);
        } catch (error) {
          console.log(error);
          setLoginFail(true);
        }
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
            onClick={onClickFunc}
          >
            Login
          </button>
          {
            loginFail ? (<span>⚠️ Usuário não existe</span>) : (null)
          }
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