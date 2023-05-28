const registerValidate = (name, email, password) => {
  const REGEX = /^\S+@\S+\.\S+$/;
  const MIN_PASSWORD = 8;
  const MIN_NAME = 3;

  if (name.length >= MIN_NAME && REGEX.test(email) && password.length >= MIN_PASSWORD) {
    return false;
  }

  return true;
}

export default registerValidate;