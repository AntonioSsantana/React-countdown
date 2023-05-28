import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [userCredentials, setCredentials] = useState({});

  const [disableStatus, setDisableStatus] = useState(true);

  const onChangeFunc = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name-input':
        setCredentials({
          ...userCredentials,
          name: value
        })
        break;
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
        })
        break;
      default:
        break;
    }

  }

  return (
    <main>
      <article>
        <form>
          <label htmlFor="name-input">
            Nome
            <input
              type="text"
              name="name-input"
              onChange={onChangeFunc}
            />
          </label>
          <label htmlFor="email-input">
            Email
            <input
              type="text"
              name="email-input"
              onChange={onChangeFunc}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password-input"
              onChange={onChangeFunc}
            />
          </label>
          <button
            type="button"
            name="register-button"
            disabled={disableStatus}
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