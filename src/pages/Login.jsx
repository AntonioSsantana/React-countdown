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
        </form>
      </article>
    </main>
  );
}

export default Login;