const registerValidate = (email, password) => {
  const REGEX = /^\S+@\S+\.\S+$/;
  const MIN_LENGTH = 8;


  if (REGEX.test(email) && password.length >= MIN_LENGTH) {
    return false;
  }

  return true;
}

export default registerValidate;