import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Validation
import registerValidate from "../validations/Register.validation";

function Register() {
  const [userCredentials, setCredentials] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [disableStatus, setDisableStatus] = useState(true);
  const [registrationCompleted, setCompleted] = useState(false);

  useEffect(() => {
    try {
      const { name, email, password } = userCredentials;
      !registerValidate(name, email, password) ? (setDisableStatus(false)) : (setDisableStatus(true))
    } catch (error) {
      console.log(error);
    }
  }, [userCredentials]);

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

  const onClickFunc = ({ target }) => {
    const { name } = target;

    switch (name) {
      case 'register-button':
        localStorage.setItem('user_registered', JSON.stringify(userCredentials));
        setCompleted(true);
        break;
      default:
        break;
    }
  };

  return (
    <main>
      <article>
        <form>
          <label htmlFor="name-input">
            <span>Nome</span>
            <input
              type="text"
              name="name-input"
              onChange={onChangeFunc}
            />
          </label>
          <label htmlFor="email-input">
            <span>Email</span>
            <input
              type="text"
              name="email-input"
              onChange={onChangeFunc}
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              name="password-input"
              onChange={onChangeFunc}
            />
          </label>
          <button
            type="button"
            name="register-button"
            onClick={onClickFunc}
            disabled={disableStatus}
          >
            Registrar
          </button>
          {
            registrationCompleted ? ( <span>Registro concluído ✅</span> ) : ( null )
          }
          <Link
            to="/login"
          >
            Login
          </Link>
        </form>
      </article>
      <article>
        <ul>
          <li>O nome de usuário deve conter no mínimo 3 caracteres</li>
          <li>O email deve ser válido</li>
          <li>A senha deve conter no mínimo 8 caracteres</li>
        </ul>
      </article>
    </main>
  );
}

export default Register;