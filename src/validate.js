const validate = (name, value) => {
  function passwordIsValid(password) {
    return /^\s*123123\s*$/.test(password);
  }

  function emailIsValid(email) {
    return /^\s*test@test.com\s*$/.test(email);
  }

  switch (name) {
    case "email":
      if (!emailIsValid(value)) return "email should be test@test.com";
      break;
    case "firstName":
      if (!value) return "first Name is required";
      break;
    case "lastName":
      if (!value) return "last Name is required";
      break;
    case "password":
      if (!passwordIsValid(value)) {
        return "password should be 123123";
      }
      break;
    default:
      return;
  }
};

export default validate;
