const registerValidate = (email, password) => {
  const REGEX = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  const MIN_LENGTH = 8;

  if (REGEX.test(email) && password.length >= MIN_LENGTH) {
    return true;
  }

  return false;
}

export default registerValidate;